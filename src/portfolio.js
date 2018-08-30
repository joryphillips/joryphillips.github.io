/* global customElements */
(function() {
  'use strict';

  class XPortfolio extends HTMLElement {

    template() {
      return `
        <section class="clearfix py4 px2 sm-px3 bg-silver border-top border-bottom" id="portfolio">
          <h1 class="mt0 mb3 navy">Portfolio</h1>
          <div class="flex flex-wrap mxn1 project-holder"></div>
        </section>

          <template id="project">
            <a
              class="proj col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb4"
              href="">
              <div class="hover-shadow-grow image-container">
                <img class="image block" src="" alt="">
              </div>
              <div class="textContainer absolute mt1 col-12">
                <h5 class="title h5 p1 m0 navy"></h5>
              </div>
            </a>
          </template>
      `;
    }


    connectedCallback() {
      this.innerHTML = this.template();
      this.loadData(this.dataset.source)
    }

    async loadData(source) {
      console.log(source)
      if (source) {
        const portfolioRequest = new Request(source);
        const response = await fetch(portfolioRequest)
        console.log(response)

        //   return response.json().then(json => {
        //     return json;
        //   }, (error) => {
        //     console.error(error);
        //   });
        // }, (error) => {
        //   console.error(error);
        // });
        
        this.createProjects(data);
      }
    }

    setupImports() {
      const importArr = this.dataset.imports.split(',');
      importArr.forEach(importEl => {
        importEl = importEl.trim();
        const scriptEl = document.createElement('script');
        scriptEl.src = importEl + '.js';
        this.appendChild(scriptEl);
        scriptEl.addEventListener('load', () => {
          window[importEl]();
        });
      });
    }


    handleProjectClick(e) {
      console.log(e)
      let highlightProj = e.path.find(el => {
        return el.classList && el.classList.contains('proj');
      });

      // let description = highlightProj.querySelector('#description');
      // let textContainer = highlightProj.querySelector('#textContainer');
      // let portfolio = document.querySelector('#portfolio');
      // let portfolioItems = portfolio.querySelectorAll('.proj');
      // let portfolioSection = document.querySelector('#portfolio');
      // let sections = document.querySelectorAll('section');
      //
      // this.toggleAllExcept(portfolioSection, sections, 'invisible', false);
      // this.toggleAllExcept(highlightProj, portfolioItems, 'visible');
      //
      // highlightProj.classList.toggle('wide');
      // description.classList.toggle('visible');
      // textContainer.classList.toggle('absolute');

      // this.dispatchEvent(new CustomEvent('open-project-detail', {
      //   bubbles: true,
      //   detail: {
      //     // projectEl: highlightProj,
      //     infoData: highlightProj.infoData,
      //   }
      // }));


    }


    kebabCase(string) {
      return string.toLowerCase().replace(/[^a-z0-9+]+/gi, '-');
    }


    createProjects(portfolio) {

      const contentLoader = portfolio => {
        return new Promise(resolve => {
          let cloneList = [];

          portfolio.forEach(project => {
            const projectTemplate = document.querySelector('#project');
            const projLink = projectTemplate.content.querySelector('a.proj');
            const image = projectTemplate.content.querySelector('.image');
            const title = projectTemplate.content.querySelector('.title');
            // let description = projectTemplate.content.querySelector('#description');

            projLink.href = `?project=${this.kebabCase(project.title)}`;
            image.alt = 'image of ' + project.title;
            image.src = './images/' + project.imageSources[0];
            title.textContent = project.title;
            // description.textContent = project.description;

            const clone = document.importNode(projectTemplate.content, true);
            cloneList.push(clone);
          });
          if (cloneList.length === portfolio.length) {
            resolve(cloneList, portfolio);
          } else {
            console.warn('something is wrong. portfolio and clonelist lengths do not match.');
            resolve(cloneList, portfolio);
          }
        });
      };

      const appendClones = (cloneList, portfolio) => {
        const projectHolder = document.querySelector('.project-holder');
        let appendPromiseList = [];
        cloneList.forEach((clone) => {
          projectHolder.appendChild(clone);
        });
        const projects = projectHolder.querySelectorAll('.proj');

        projects.forEach((proj, index) => {
          appendPromiseList.push(proj);
          proj.infoData = portfolio[index];
          proj.addEventListener('click', this.handleProjectClick.bind(this), false);
        });
        return appendPromiseList;
      };

      const imageLoadedPromise = (proj, image) => {
        return new Promise(resolve => {
          image.addEventListener('load', resolve(proj), false);
          image.addEventListener('error', resolve(proj), false);
        });
      };

      const waitForImageLoad = projects => {
        let imagesLoadedArray = [];
        for (let proj of projects) {
          const image = proj.querySelector('img');
          imagesLoadedArray.push(imageLoadedPromise(proj, image));
        }
        return Promise.resolve(imagesLoadedArray);
      };

      const fadeInSequence = (i, elements, duration) => {
        setTimeout(() => {
          const targetEl = elements[i];
          if (i < elements.length) {
            targetEl.classList.add('visible');
            fadeInSequence(i + 1, elements, duration);
          }
        }, 250);
      };


      contentLoader(portfolio)
        .then(cloneList => {
          Promise.all(appendClones(cloneList, portfolio))
            .then(projects => {
              waitForImageLoad(projects).then(results => {
                Promise.all(results).then(elements => {
                  fadeInSequence(0, elements, 450);
                });

              }).then(this.setupImports());
            });
        });
    }

  }

  customElements.define('x-portfolio', XPortfolio);

})();
