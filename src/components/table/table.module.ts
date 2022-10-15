import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ColumnDirective } from './column/column.directive';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent,
    ColumnDirective,
  ],
  imports: [
    CommonModule,
    CdkTableModule
  ],
  exports: [
    TableComponent,
    ColumnDirective,
  ]
})
export class TableModule { }
