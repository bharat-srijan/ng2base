import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserModule  }           from '@angular/platform-browser';

import { SharedModule } from './shared';
import { HomeModule }               from './home';
import { AppComponent }             from './app.component';
import { routing }                  from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        SharedModule,
        /** custom modules */
        HomeModule,
        routing
    ],
    declarations: [AppComponent, ],
    exports: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
