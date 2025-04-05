import { html } from 'lit';
import '../typewriter/typewriter';

const roles = [
  'Software Engineer',
  'UX/UI Engineer',
  'Full Stack Developer',
  'Front End Developer',
  'Software Developer',
  'Web Developer',
  'Web Designer',
  'Creative Director',
  'Creative Technologist',
  'Urban Planner',
  'Urban Designer',
  'Communications Designer',
  'Policy Analyst',
  'Data Analyst',
  'Project Lead',
  'Tech Lead',
  'Team Lead',
  'Outreach Strategist',
  'Public Speaker',
  'Presenter',
];

export const jumbotron = html`
  <section id="summary" class="jumbo navy">
    <h1>Jory Phillips</h1>
    <type-writer class="h2" .strings=${roles}></type-writer>
  </section>
`;
