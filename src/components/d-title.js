import { Template } from '../mixins/template';

const T = Template('d-title', `
<style>
  :host {
    padding-top: 1rem;
    contain: content;
    display: block;
  }
  ::slotted(h1) {
    grid-column: text-start / span 5;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.05em;
    margin: 0 0 0.5rem;
  }
  .status {
    margin-top: 0px;
    font-size: 12px;
    color: #009688;
    opacity: 0.8;
    grid-column: kicker;
  }
  .status span {
    line-height: 1;
    display: inline-block;
    padding: 6px 0;
    border-bottom: 1px solid #80cbc4;
    font-size: 11px;
    text-transform: uppercase;
  }
</style>

<!-- <div class="status"><span>✓ Peer Reviewed</span></div> -->
<slot></slot>
`);

export class Title extends T(HTMLElement) {

}
