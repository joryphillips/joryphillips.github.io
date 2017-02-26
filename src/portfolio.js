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
            <div class="proj col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb4">
              <div class="hover-shadow-grow image-container">
                <img id="image" class="block" src="" alt="">
              </div>
              <div id="textContainer" class="absolute mt1 col-12">
                <h5 id="title" class="h5 p1 m0 navy"></h5>
                <p id="description" class="p1 m0 navy"></p>
              </div>
            </div>
          </template>
      `;
    }


    connectedCallback() {
      this.innerHTML = this.template();
      this.loadData(this.dataset.source).then(data => {
        this.createProjects(data);
      });
    }

    loadData(source) {
      if (source) {
        let portfolioRequest = new Request(source);
        return fetch(portfolioRequest).then(response => {
          return response.json().then(json => {
            return json;
          }, (error) => {
            console.error(error);
          });
        }, (error) => {
          console.error(error);
        });
      }
    }

    setupImports() {
      let importArr = this.dataset.imports.split(',');
      importArr.forEach(importEl => {
        importEl = importEl.trim();
        let scriptEl = document.createElement('script');
        scriptEl.src = importEl + '.js';
        this.appendChild(scriptEl);
        scriptEl.addEventListener('load', () => {
          window[importEl]();
        });
      });
    }

    toggleAllExcept(selected, list, className, flipBool = true) {
      list.forEach(item => {
        if (item !== selected) {
          item.classList.toggle(className);
          if (!flipBool) {
            item.style.display = item.classList.contains(className) ? 'none' : 'block';
          } else {
            item.style.display = item.classList.contains(className) ? 'block' : 'none';
          }
        }
      });
    }


    handleProjectClick(e) {
      let highlightProj = e.path.find(el => {
        return el.classList && el.classList.contains('proj');
      });
      let description = highlightProj.querySelector('#description');
      let textContainer = highlightProj.querySelector('#textContainer');
      let portfolio = document.querySelector('#portfolio');
      let portfolioItems = portfolio.querySelectorAll('.proj');
      let portfolioSection = document.querySelector('#portfolio');
      let sections = document.querySelectorAll('section');

      this.toggleAllExcept(portfolioSection, sections, 'invisible', false);
      this.toggleAllExcept(highlightProj, portfolioItems, 'visible');

      highlightProj.classList.toggle('wide');
      description.classList.toggle('visible');
      textContainer.classList.toggle('absolute');
    }




    createProjects(portfolio) {

      let self = this;

      let contentLoader = portfolio => {
        return new Promise(resolve => {
          let cloneList = [];

          portfolio.forEach(project => {
            let projectTemplate = document.querySelector('#project');
            let image = projectTemplate.content.querySelector('#image');
            let title = projectTemplate.content.querySelector('#title');
            let description = projectTemplate.content.querySelector('#description');

            image.alt = 'image of ' + project.title;
            image.src = './images/' + project.imageSources[0];
            title.textContent = project.title;
            description.textContent = project.description;

            let clone = document.importNode(projectTemplate.content, true);
            cloneList.push(clone);
          });
          if (cloneList.length === portfolio.length) {
            resolve(cloneList);
          } else {
            console.warn('something is wrong. portfolio and clonelist lengths do not match.');
            resolve(cloneList);
          }
        });
      };

      let appendClones = cloneList => {
        const projectHolder = document.querySelector('.project-holder');
        let appendPromiseList = [];
        cloneList.forEach(clone => {
          projectHolder.appendChild(clone);
        });
        let projects = projectHolder.querySelectorAll('.proj');
        // NOTE: projects.forEach threw error in older Firefox, now works in 50.1
        projects.forEach(proj => {
          appendPromiseList.push(Promise.resolve(proj));
          proj.addEventListener('click', self.handleProjectClick.bind(self), false);
        });
        return appendPromiseList;
      };

      let imageLoadedPromise = (proj, image) => {
        return new Promise(resolve => {
          image.addEventListener('load', resolve(proj), false);
          image.addEventListener('error', resolve(proj), false);
        });
      };

      let waitForImageLoad = projects => {
        let imagesLoadedArray = [];
        for (let proj of projects) {
          let image = proj.querySelector('img');
          imagesLoadedArray.push(imageLoadedPromise(proj, image));
        }
        return Promise.resolve(imagesLoadedArray);
      };

      let fadeInSequence = (i, elements, duration) => {
        setTimeout(() => {
          let targetEl = elements[i];
          if (i < elements.length) {
            targetEl.classList.add('visible');
            fadeInSequence(i + 1, elements, duration);
          }
        }, 250);
      };


      contentLoader(portfolio)
        .then(cloneList => {
          Promise.all(appendClones(cloneList))
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
