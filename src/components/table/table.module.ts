import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ColumnDirective } from './column/column.directive';
import { TableComponent } from './table/table.component';
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "../components.module";


@NgModule({
  declarations: [
    TableComponent,
    ColumnDirective,
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    MatIconModule,
    ComponentsModule
  ],
  exports: [
    TableComponent,
    ColumnDirective,
  ]
})
export class TableModule { }
