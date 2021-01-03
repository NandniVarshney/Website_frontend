import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  template: `
    <app-tooltip [error]="getErrorMsg()">
      <div class="app-text-field flex-v" [ngClass]="{'input-border':showBorder,'error':isInValid()}"
           (click)="input.focus()">
        <label *ngIf="!!leadingIcon" class="leading"
               [ngClass]="{'active':(!!control.value||isFocused)}">{{label}}</label>
        <label *ngIf="!leadingIcon" [ngClass]="{'active':(!!control.value||isFocused)}">{{label}}</label>
        <div class="flex-h container">
          <i *ngIf="leadingIcon" class="material-icons leading-icon">{{leadingIcon}}</i>
          <input
            #input
            (focus)="focusActionHandler($event)"
            [readOnly]="readOnly"
            (blur)="blurActionHandler($event)"
            [formControl]="control"
            (keyup)="changeHandler.emit($event)"
            [type]="type"
            [autocomplete]="autocomplete"
            class="flex-1">
          <i *ngIf="trailingIcon" class="material-icons trailing-icon">{{trailingIcon}}</i>
        </div>
      </div>
    </app-tooltip>
  `,
  styles: [`
    .app-text-field {
      height: 50px;
      background: #ffffff;
      margin: 5px;
      border-radius: 2px;
      overflow: hidden;
      justify-content: center;
      position: relative;
    }

    .app-text-field.error > label {
      color: var(--error-color);
    }

    .leading-icon {
      padding-left: 10px;
      cursor: pointer;
    }

    .trailing-icon {
      cursor: pointer;
    }

    .app-text-field > .container {
      height: 55px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .app-text-field > .container > input {
      border: none;
      background: transparent;
      outline: none;
      text-indent: 15px;
      font-size: 14px;
      padding-top: 14px;
      width: 100%;
    }

    .app-text-field > label {
      position: absolute;
      margin-left: 15px;
      font-size: 14px;
      color: var(--icon-color);
      transform-origin: left top;
      font-weight: 400;
      transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .app-text-field > label.active {
      transform: translateY(-100%) scale(0.9);
      margin-left: 15px;
      margin-top: 6px;
    }

    .leading {
      margin-left: 36px !important;
      text-indent: 8px !important;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: #000000 !important;
    }
  `]
})
export class TextFieldComponent implements OnChanges {

  @Input() label: string;
  @Input() value: string;
  @Input() control: FormControl = new FormControl();
  @Input() error: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'password' | 'number' = 'text';
  @Input() leadingIcon: string;
  @Input() trailingIcon: string;
  @Input() showBorder = false;
  @Input() readOnly = false;
  @Input() autocomplete = 'off';
  @Output() changeHandler = new EventEmitter();
  @Output() blurHandler = new EventEmitter();
  @Output() focusHandler = new EventEmitter();
  public isFocused = false;

  focusActionHandler(e) {
    this.isFocused = true;
    this.focusHandler.emit(e);
  }

  blurActionHandler(e) {
    this.isFocused = false;
    this.blurHandler.emit(e);
  }

  getErrorMsg() {
    if (this.error && this.isFocused) {
      return this.error;
    }
    if (!this.isInValid()) {
      return ``;
    }
    const {errors} = this.control;
    if (!errors) {
      return ``;
    }
    if (errors.required) {
      return `${this.label} required`;
    }
    if (errors.email) {
      return `Invalid Email Id`;
    }
  }

  isInValid() {
    if (this.error) {
      return true;
    }
    return this.control && this.control.touched && this.control.invalid;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.control.patchValue(changes.value.currentValue);
    }
    if (changes.control) {
      this.control = changes.control.currentValue;
    }
    if (changes.error) {
      this.error = changes.error.currentValue;
    }
  }

}
