import {html} from 'lit';
import {Job, RESUME} from '../data/jory';

function renderJob(job: Job) {
  return html`
    <div class="job">
      <h2 class="title">
        <span class="dark-blue">${job.place}</span>
        <span class="regular date">${job.date}</span>
      </h2>
      <h2 class="summary">${job.summary}</h2>
    </div>
  `;
}

export const jobs = html`
  <section id="experience" class="experience">
    <div class="container">
      <h1>Experience</h1>
      <div class="job-holder">
        ${RESUME.map(job => renderJob(job))}
      </div>
    </div>
  </section>
`;
