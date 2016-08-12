import { NgModule }           from '@angular/core';

import { SharedModule }       from '../shared';
import { HomeComponent }      from './home.component';
import { routing }            from './home.routing';
@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule { }
