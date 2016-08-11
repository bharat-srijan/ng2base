import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { BrowserModule  }           from '@angular/platform-browser';

import { MdButtonModule }           from '@angular2-material/button';
import { MdButtonToggleModule }     from '@angular2-material/button-toggle';
import { MdCardModule }             from '@angular2-material/card';
import { MdCheckboxModule }         from '@angular2-material/checkbox';
import { MdGridListModule }         from '@angular2-material/grid-list';
import { MdIconModule }             from '@angular2-material/icon';
import { MdInputModule }            from '@angular2-material/input';
import { MdListModule }             from '@angular2-material/list';
import { MdMenuModule }             from '@angular2-material/menu';
import { MdProgressBarModule }      from '@angular2-material/progress-bar';
import { MdProgressCircleModule }   from '@angular2-material/progress-circle';
import { MdRadioModule }            from '@angular2-material/radio';
import { MdSidenavModule }          from '@angular2-material/sidenav';
import { MdSlideToggleModule }      from '@angular2-material/slide-toggle';
import { MdTabsModule }             from '@angular2-material/tabs';
import { MdToolbarModule }          from '@angular2-material/toolbar';

import { FIREBASE_PROVIDERS }       from 'angularfire2';


import { HomeModule }               from './home';
import { AppComponent }             from './app.component';
import { routing }                  from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        /**material */
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdProgressBarModule,
        MdProgressCircleModule,
        MdRadioModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdTabsModule,
        MdToolbarModule,
        /************/
        /** custom modules */
        HomeModule,
        routing
    ],
    declarations: [AppComponent],
    exports: [AppComponent],
    providers: [FIREBASE_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule { }
