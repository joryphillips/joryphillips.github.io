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
          <div class="proj col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb2">
            <div class="hover-shadow-grow">
                <img id="image" src="" alt="">
                <div class="hover-fade-in absolute bottom-0 z2 full-width bg-navy">
                  <h5 id="title" class="h5 p1 mb0 electric-blue">{projectInfo.title}</h5>
                </div>
            </div>
          </div>
        </template>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
      this.loadData(this.dataset.source).then((data) => {
        this.createProjects(data);
      });
    }

    loadData(source) {
      if (source) {
        let portfolioRequest = new Request(source);
        return fetch(portfolioRequest).then((response, error) => {
          return response.json().then((json, error) => {
            return json;
          }, (error) => {
            console.error(error);
          });
        }, (error) => {
          console.error(error);
        });
      }
    }

    createProjects(portfolio) {

      function contentLoader(portfolio) {
        return new Promise((resolve, reject) => {
          let cloneList = [];

          portfolio.forEach((project) => {
            let projectTemplate = document.querySelector('#project');
            let image = projectTemplate.content.querySelector('#image');
            let title = projectTemplate.content.querySelector('#title');

            image.alt = 'image of ' + project.title;
            image.src = './img/' + project.imageSources[0];
            title.textContent = project.title;

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
      }

      function appendClones(cloneList) {
        const projectHolder = document.querySelector('.project-holder');
        let appendPromiseList = [];
        cloneList.forEach((clone) => {
          projectHolder.appendChild(clone);
        });
        let projects = projectHolder.querySelectorAll('.proj');
        projects.forEach((proj) => {
          appendPromiseList.push(Promise.resolve(proj));
        });
        return appendPromiseList;
      }

      function imageLoadedPromise(proj, image) {
        return new Promise((resolve, reject) => {
          image.addEventListener('load', resolve(proj), false);
          image.addEventListener('error', resolve(proj), false);
        });
      }

      function waitForImageLoad(projects) {
        // let projects = document.querySelectorAll('.proj');
        let imagesLoadedArray = [];
        for (let proj of projects) {
          let image = proj.querySelector('img');
          imagesLoadedArray.push(imageLoadedPromise(proj, image));
        }
        return imagesLoadedArray;
      }

      let sequence = Promise.resolve();

      contentLoader(portfolio)
        .then((cloneList) => {
          Promise.all(appendClones(cloneList))
            .then((projects) => {
              let start = new Date();
              return waitForImageLoad(projects).reduce((sequence, imagePromise) => {
                // console.log(sequence, imagePromise, new Date()-start);
                // Use reduce to chain the promises together,
                // adding content to the page for each chapter
                return sequence.then(() => {
                  // Wait for everything in the sequence so far,
                  // then wait for this chapter to arrive.
                  return imagePromise;
                }).then((project) => {
                  // console.log('add visible class', project, new Date()-start);
                  // setTimeout( ()=>{
                  //   console.log('settimeout', new Date()-start);
                  project.classList.add('visible');
                // }, 600);

                  //   // NOTE: event listeners don't seem to work if added to clone before being imported
                  project.addEventListener('click', () => {
                    // add function to expand to details view here
                    console.log(project, 'clicked');
                  }, false);

                });
              }, Promise.resolve());
            });
        });


    }

  }

  customElements.define('x-portfolio', XPortfolio);







})();
