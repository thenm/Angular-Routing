import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementHomeComponent } from './element-home/element-home.component';
import { element } from 'protractor';


const routes: Routes = [{ path: 'elements', component: ElementHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
