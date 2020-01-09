import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './merge-sort.component';

@NgModule({
  declarations: [
    MergeSortComponent
  ],
  exports: [
    MergeSortComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MergeSortModule { }
