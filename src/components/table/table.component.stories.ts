import { CdkTableModule } from '@angular/cdk/table';


import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CHILDREN_DATA, ELEMENT_DATA, PeriodicElement, StudentResult } from './data';
import { TableComponent } from './table/table.component';
import {TableModule} from "./table.module";


export default {
  title: 'Widgets / TableComponent',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CdkTableModule,
        TableModule,
      ]
    })
  ],
  parameters: {
  },
  argTypes: {
  }
} as Meta<TableComponent<PeriodicElement>>;

const simple: Story<TableComponent<PeriodicElement>> = (args: TableComponent<PeriodicElement>) => ({
  props: args,
  template: `
<p1-table  [data]='data' >
  <ng-template p1Column name='position' title='Position' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='name' title='Name' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='weight' title='Weight' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='symbol' title='Symbol' let-data='data'>{{data}}</ng-template>
</p1-table>
`
});

export const simpleTable4Columns = simple.bind({});
simpleTable4Columns.args = {
  data: ELEMENT_DATA
};

const sortable: Story<TableComponent<PeriodicElement>> = (args: TableComponent<PeriodicElement>) => ({
  props: args,
  template: `
<p1-table  [data]='data' >
  <ng-template p1Column name='position' title='Position' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='name' sortable='true' title='Name' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='weight' sortable='true' title='Weight' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='symbol' title='Symbol' let-data='data'>{{data}}</ng-template>
</p1-table>
`
});

export const sortableColumns = sortable.bind({});
sortableColumns.args = {
  data: ELEMENT_DATA
};


const nonDefaultCell: Story<TableComponent<StudentResult>> = (args: TableComponent<StudentResult>) => ({
  props: args,
  template: `
<p1-table  [data]='data' >
  <ng-template p1Column name='id' sortable='true' title='Identifier' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='name' sortable='true' title='Name' let-data='data'>{{data}}</ng-template>
  <ng-template p1Column name='grade' sortable='true' title='Score' let-data='data'><p1-progress-pill [score]='data'></p1-progress-pill></ng-template>
</p1-table>
`
});

export const nonDefaultCellType = nonDefaultCell.bind({});
nonDefaultCellType.args = {
  data: CHILDREN_DATA
};
