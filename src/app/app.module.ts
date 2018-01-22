import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';

//page and layout //
import { HeaderComponent } from './layouts/header/header.component';
import { TemplateComponent } from './layouts/template/template.component';
import { Sprint1Component } from './prototype/sprint1.component';
import { Sprint2Component } from './prototype/sprint2.component';
import { Sprint3Component } from './prototype/sprint3.component';
import { Sprint4Component } from './prototype/sprint4.component';
import { SeriesComponent } from './shared/series.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateComponent,
    Sprint1Component,
    Sprint2Component,
    Sprint3Component,
    Sprint4Component,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule.forRoot(),
    AppBootstrapModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
