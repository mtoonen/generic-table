import { DataSource } from '@angular/cdk/collections';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ColumnDirective } from '../column/column.directive';

@Component({
  selector: 'p1-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, AfterContentInit {

  @Input()
  data: T[];

  @ContentChildren(ColumnDirective)
  content: QueryList<ColumnDirective>;
  columns: ColumnDirective[];

  dataSource: ExampleDataSource<T>;
  displayColumns: string[];

  currentSortColumn: string;
  sortAscending = new Map<string, boolean>();

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new ExampleDataSource(this.data);
  }

  ngAfterContentInit(): void {
    this.columns = this.content.toArray();
    this.displayColumns = this.content.map(value => value.name);
    this.content.forEach((item) => this.sortAscending.set(item.name, false));
  }

  changeSort(column: string): void {
    this.currentSortColumn = column;
    this.sortAscending.set(column, !this.sortAscending.get(column));
  }

  isAscending(column: string): boolean{
    return this.sortAscending.get(column) || false;
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource<T> extends DataSource<T> {
  /** Stream of data that is provided to the table. */
  data: BehaviorSubject<T[]>;

  constructor(_data: T[]) {
    super();
    this.data = new BehaviorSubject<T[]>(_data);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<T[]> {
    return this.data;
  }

  disconnect() {
  }
}
