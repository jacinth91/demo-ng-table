import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCompComponent } from './demo-comp/demo-comp.component';

const routes: Routes = [
  {
     path: 'demo-comp', loadChildren: () => import('./demo-comp/demo-comp.module').then(m => m.DemoCompModule)
 },
 
 { path: '', redirectTo: '/demo-comp', pathMatch: 'full' },
 { path: '**', redirectTo: '/demo-comp' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
