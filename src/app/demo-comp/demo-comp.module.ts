import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { DemoCompComponent } from './demo-comp.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  { path: '', component: DemoCompComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes) 

  ]
})
export class DemoCompModule { }
