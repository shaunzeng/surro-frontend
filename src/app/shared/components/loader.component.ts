import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template:`
    <div class="loader-backdrop" *ngIf="isBusy">
        <!-- Loader -->
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
            </svg>
        </div>
        <!-- /loader-->
    </div>
  `,
  styles:[`
  /*! CSS Used from: http://demo.g-axon.com/jumbo-admin/css/jumbo-bootstrap.css */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
  }
  /*! CSS Used from: http://demo.g-axon.com/jumbo-admin/css/jumbo-core.min.css */
  .loader-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 999999;
    background-color: #fff;
    opacity:70%;
  }
  .loader {
    position: relative;
    margin: 0 auto;
    width: 60px;
    height: 100%;
  }
  .loader:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  .circular {
    animation: rotate 2s linear infinite;
    -webkit-animation: rotate 2s linear infinite;
    height: auto;
    transform-origin: center center;
    -webkit-transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .path {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    -webkit-animation: dash 1.5s ease-in-out infinite,
      color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
  /*! CSS Used keyframes */
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89px, 200px;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89px, 200px;
      stroke-dashoffset: -124px;
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89px, 200px;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89px, 200px;
      stroke-dashoffset: -124px;
    }
  }
  @keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
  @-webkit-keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
  `]
})
export class LoaderComponent{

  @Input() isBusy = false;

  constructor() { }

}