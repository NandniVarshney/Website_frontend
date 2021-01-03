import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TextFieldComponent} from './text-field/text-field.component';
import {ButtonComponent} from './button/button.component';
import {TooltipComponent} from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    ButtonComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TextFieldComponent,
    ButtonComponent
  ]
})
export class SharedModule {
}
