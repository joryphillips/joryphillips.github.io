import { html } from 'lit';
import '../venn_diagram/venn_diagram';

export const summary = html`
  <section class="summary">
    <div class="container">
      <p>I build things that make people's lives easier and better.
        I have designed & developed apps for Google, helped a branding agency
        brand itself, and created design guidelines and illustrations for major
        cities and a movie studio/theme park. I've led teams that make
        complicated stuff, and I am often eager to attempt the impossible.</p>
      
      <venn-diagram></venn-diagram>
    </div>
  </section>
`;
