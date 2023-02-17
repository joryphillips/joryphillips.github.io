import { css } from 'lit';
import { sharedStyles } from '../../shared_styles/styles';

export const styles = [sharedStyles, css`
  section {
    background-color: #ddd;
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 400px) {
    section {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  .visuals-header {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2rem;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    margin: 0 1rem .5rem 0;
    white-space: nowrap;
  }
  .project-holder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    grid-auto-rows: minmax(300px, auto);
  }
  @media screen and (max-width: 400px) {
    .project-holder {
      grid-auto-rows: minmax(150px, auto);
    }
  }
`];
