import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'eb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  name: string;
  constructor() { }

  ngOnInit(): void {
    switch(this.name){
      case "arrow-down-with-stick":
        this.name = "arrow_upward";
        break;
    }
  }

}
