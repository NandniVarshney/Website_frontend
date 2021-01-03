import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges {

  @Input() label = '';
  @Input() link: string | Array<string>;
  @Input() primary: boolean;
  @Input() visible = true;
  @Input() icon: string;
  @Output() clickAction = new EventEmitter();

  constructor() {
  }

  @Input() disabled = () => false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.label) {
      this.label = changes.label.currentValue;
    }
    if (changes.disabled) {
      this.disabled = changes.disabled.currentValue;
    }
    if (changes.routerLink) {
      this.link = changes.routerLink.currentValue;
    }
    if (changes.primary) {
      this.primary = changes.primary.currentValue;
    }
    if (changes.visible) {
      this.visible = changes.visible.currentValue;
    }
    if (changes.icon) {
      this.icon = changes.icon.currentValue;
    }
  }

}
