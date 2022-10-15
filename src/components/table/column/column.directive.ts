import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[p1Column]'
})
export class ColumnDirective implements OnInit {

  @Input()
  name: string;
  @Input()
  title?: string;
  @Input()
  sortable?: boolean = false;

  constructor(public template: TemplateRef<any>) { }

  ngOnInit(): void {
    this.title = this.title ?? this.name;
  }
}
