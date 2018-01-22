import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './layouts/template/template.component';
import { Sprint1Component } from './prototype/sprint1.component';
import { Sprint2Component } from './prototype/sprint2.component';
import { Sprint3Component } from './prototype/sprint3.component';
import { Sprint4Component } from './prototype/sprint4.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'sprint-1',
    pathMatch:'full'
  },
  {
    path:'',
    component:TemplateComponent,
    children: [
      {
        path:'sprint-1',
        component:Sprint1Component,
        data:{
          title:'Localry home'
        }
      },
      {
        path:'sprint-2',
        component:Sprint2Component,
        data:{
          title:'Fasion and Beauty'
        }
      },
      {
        path:'sprint-3',
        component:Sprint3Component,
        data:{
          title:'sprint-3'
        }
      },
      {
        path:'sprint-4',
        component:Sprint4Component,
        data:{
          title:'sprint-4'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
