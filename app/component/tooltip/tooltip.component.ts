import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip flex-v">
      <ng-content></ng-content>
      <span *ngIf="error" class="tooltip__text flex-v">{{error}}</span>
    </div>
  `,
  styles: [`
    .tooltip {
      position: relative;
      width: 100%;
    }

    .tooltip__text {
      visibility: hidden;
      background-color: #F2785A;
      color: #FFF;
      text-align: center;
      border-radius: 6px;
      padding: 7px 10px;
      position: absolute;
      align-self: center;
      z-index: 7;
      top: -37px;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }

    .tooltip__text::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #F2785A transparent transparent transparent;
    }

    .tooltip:hover .tooltip__text {
      visibility: visible;
    }
  `]
})
export class TooltipComponent implements OnInit {

  @Input() public error: string;

  constructor() {
  }

  ngOnInit() {
  }

}
