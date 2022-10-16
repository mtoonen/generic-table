import { Component, Input } from '@angular/core';
import {ProgressPillScore} from "../table/data";


@Component({
  selector: 'p1-progress-pill',
  templateUrl: './progress-pill.component.html',
  styleUrls: ['./progress-pill.component.scss']
})
export class ProgressPillComponent {

  @Input()
  public score: ProgressPillScore;

}
