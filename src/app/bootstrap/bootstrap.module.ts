import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsCardComponent } from './bs-card/bs-card.component';
import { BsColumnComponent } from './bs-column/bs-column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsCardComponent,
    BsColumnComponent
  ],
  exports: [
    BsCardComponent,
    BsColumnComponent
  ]
})
export class BootstrapModule { }

