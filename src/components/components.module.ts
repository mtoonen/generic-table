import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ProgressPillComponent } from './progress-pill/progress-pill.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        IconComponent,
        ProgressPillComponent
    ],
    exports: [
        IconComponent,
      ProgressPillComponent
    ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
