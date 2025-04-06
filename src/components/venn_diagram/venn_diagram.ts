import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('venn-diagram')
export class VennDiagram extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;

      /* Color variables */
      --color-non-overlap: rgba(97, 180, 205, 0.4);
      --color-overlap: rgba(97, 180, 205, 0.6);
      --color-text: rgba(0, 32, 66, 0.5);

      --color-active-non-overlap: rgba(97, 180, 205, 0.5);
      --color-active-overlap: rgba(97, 180, 205, 0.7);
      --color-active-text: rgba(0, 32, 66, 0.8);

      /* Animation duration */
      --animation-duration: 18s;
    }

    .venn-container {
      position: relative;
      margin: 0 auto;
      display: inline-block;
      width: 600px;
      max-width: 100%;
    }

    svg {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    /* Base styles for paths and text */
    svg path {
      fill: var(--color-non-overlap);
      transition: fill 0.3s ease-in-out;
    }

    svg text {
      fill: var(--color-text);
      transition: fill 0.3s ease-in-out;
      font-family: 'HelveticaNeue', 'Helvetica Neue', sans-serif;
      font-size: 28px;
    }

    /* Overlapping sections */
    #comms-policy path,
    #comms-eng path,
    #eng-policy path {
      fill: var(--color-overlap);
    }

    #me path {
      fill: rgba(97, 180, 205, 0.8);
    }
    #me-text text {
      fill: rgba(0, 32, 66, 0.8);
    }

    /* Animation keyframes */
    @keyframes section-cycle {
      0%, 16.67% {
        fill: var(--color-non-overlap);
      }
      8.33% {
        fill: var(--color-active-non-overlap);
      }
    }

    @keyframes overlap-cycle {
      0%, 16.67% {
        fill: var(--color-overlap);
      }
      8.33% {
        fill: var(--color-active-overlap);
      }
    }

    @keyframes text-cycle {
      0%, 16.67% {
        fill: var(--color-text);
      }
      8.33% {
        fill: var(--color-active-text);
      }
    }

    /* Section animations */
    #comms path {
      animation: section-cycle var(--animation-duration) infinite;
    }
    #comms-text text {
      animation: text-cycle var(--animation-duration) infinite;
    }

    #comms-policy path {
      animation: overlap-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) / 6);
    }
    #comms-policy-text text {
      animation: text-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) / 6);
    }

    #policy path {
      animation: section-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 2 / 6);
    }
    #policy-text text {
      animation: text-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 2 / 6);
    }

    #eng-policy path {
      animation: overlap-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 3 / 6);
    }
    #eng-policy-text text {
      animation: text-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 3 / 6);
    }

    #eng path {
      animation: section-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 4 / 6);
    }
    #eng-text text {
      animation: text-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 4 / 6);
    }

    #comms-eng path {
      animation: overlap-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 5 / 6);
    }
    #comms-eng-text text {
      animation: text-cycle var(--animation-duration) infinite;
      animation-delay: calc(var(--animation-duration) * 5 / 6);
    }
  `;

  render() {
    return html`
      <div class="venn-container">
        <svg width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" 
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
          <g id="venn" transform="matrix(0.773946,0,0,0.997752,-602.255,-102.085)">
            <rect x="778.161" y="102.315" width="1323.09" height="1026.31" style="fill:none;"/>
            <g id="comms" transform="matrix(1.29208,0,0,1.00225,-364.936,-50.555)">
                <path d="M1178.39,538.619C1177.45,530.389 1176.96,522.021 1176.96,513.54C1176.96,393.079 1274.76,295.279 1395.23,295.279C1515.69,295.279 1613.49,393.079 1613.49,513.54C1613.49,524.24 1612.71,534.761 1611.22,545.05C1578.26,525.055 1539.6,513.54 1498.26,513.54C1458.52,513.54 1421.24,524.186 1389.13,542.778C1357.02,524.186 1319.74,513.54 1280,513.54C1243.32,513.54 1208.75,522.607 1178.39,538.619Z"/>
            </g>
            <g id="policy" transform="matrix(1.29208,0,0,1.00225,-231.805,168.198)">
                <path d="M1508.19,326.789C1571.29,365.064 1613.49,434.413 1613.49,513.54C1613.49,634.002 1515.69,731.802 1395.23,731.802C1355.48,731.802 1318.2,721.156 1286.09,702.564C1351.31,664.802 1395.23,594.259 1395.23,513.54C1395.23,505.06 1394.74,496.692 1393.8,488.462C1454.28,456.556 1498.01,397.071 1508.19,326.789Z"/>
            </g>
            <g id="comms-policy" transform="matrix(1.29208,0,0,1.00225,-231.805,168.198)">
                <path d="M1286.09,324.517C1318.2,305.925 1355.48,295.279 1395.23,295.279C1436.56,295.279 1475.23,306.794 1508.19,326.789C1498.01,397.071 1454.28,456.556 1393.8,488.462C1385.76,418.361 1344.46,358.311 1286.09,324.517Z"/>
            </g>
            <g id="eng" transform="matrix(1.29208,0,0,1.00225,-513.816,168.198)">
                <path d="M1504.36,702.564C1472.24,721.156 1434.97,731.802 1395.23,731.802C1274.76,731.802 1176.96,634.002 1176.96,513.54C1176.96,429.756 1224.28,356.935 1293.62,320.358C1301.47,388.915 1341.15,447.858 1397.49,482.031C1396,492.32 1395.23,502.841 1395.23,513.54C1395.23,594.259 1439.14,664.802 1504.36,702.564Z"/>
            </g>
            <g id="comms-eng" transform="matrix(1.29208,0,0,1.00225,-513.816,168.198)">
                <path d="M1397.49,482.031C1341.15,447.858 1301.47,388.915 1293.62,320.358C1323.97,304.346 1358.55,295.279 1395.23,295.279C1434.97,295.279 1472.24,305.925 1504.36,324.517C1447.78,357.273 1407.24,414.697 1397.49,482.031Z"/>
            </g>
            <g id="eng-policy" transform="matrix(1.29208,0,0,1.00225,-513.816,168.198)">
                <path d="M1504.36,702.564C1439.14,664.802 1395.23,594.259 1395.23,513.54C1395.23,502.841 1396,492.32 1397.49,482.031C1430.45,502.026 1469.12,513.54 1510.45,513.54C1547.13,513.54 1581.7,504.474 1612.06,488.462C1613,496.692 1613.49,505.06 1613.49,513.54C1613.49,594.259 1569.57,664.802 1504.36,702.564Z"/>
            </g>
            <g id="me" transform="matrix(1.29208,0,0,1.00225,-513.816,168.198)">
                <path d="M1397.49,482.031C1407.24,414.697 1447.78,357.273 1504.36,324.517C1562.72,358.311 1604.02,418.361 1612.06,488.462C1581.7,504.474 1547.13,513.54 1510.45,513.54C1469.12,513.54 1430.45,502.026 1397.49,482.031Z"/>
            </g>
            <g id="comms-text" transform="matrix(1.29208,0,0,1.00225,102.022,157.117)">
                <text x="930.75px" y="219.234px">communications</text>
            </g>
            <g id="eng-text" transform="matrix(1.29208,0,0,1.00225,-59.3112,495.772)">
                <text x="867.57px" y="219.234px">engineering</text>
            </g>
            <g id="comms-eng-text" transform="matrix(1.29208,0,0,1.00225,-162.295,240.577)">
                <text x="884.848px" y="219.234px">user</text>
                <text x="843.114px" y="248.018px">experience</text>
            </g>
            <g id="comms-policy-text" transform="matrix(1.29208,0,0,1.00225,691.752,242.311)">
                <text x="840.694px" y="219.234px">presentations</text>
                <text x="857.802px" y="248.018px">&amp; outreach</text>
            </g>
            <g id="eng-policy-text" transform="matrix(1.29208,0,0,1.00225,202.823,730.399)">
                <text x="882.558px" y="219.234px">guidelines,</text>
                <text x="868.292px" y="248.018px">regulations &amp;</text>
                <text x="899.68px" y="276.802px">analysis</text>
            </g>
            <g id="policy-text" transform="matrix(1.29208,0,0,1.00225,492.708,495.772)">
                <text x="912.644px" y="219.234px">policy</text>
            </g>
            <g id="me-text" transform="matrix(1.29208,0,0,1.00225,238.643,381.748)">
                <text x="905.95px" y="219.234px">me</text>
            </g>
          </g>
        </svg>
      </div>
    `;
  }
}