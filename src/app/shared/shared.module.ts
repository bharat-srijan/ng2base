import { NgModule }                 from '@angular/core';

import { MdButtonModule }           from '@angular2-material/button/button';
import { MdButtonToggleModule }     from '@angular2-material/button-toggle/button-toggle';
import { MdCardModule }             from '@angular2-material/card/card';
import { MdCheckboxModule }         from '@angular2-material/checkbox/checkbox';
import { MdGridListModule }         from '@angular2-material/grid-list/grid-list';
import { MdIconModule }             from '@angular2-material/icon/icon';
import { MdInputModule }            from '@angular2-material/input/input';
import { MdListModule }             from '@angular2-material/list/list';
import { MdMenuModule }             from '@angular2-material/menu/menu';
import { MdProgressBarModule }      from '@angular2-material/progress-bar/progress-bar';
import { MdProgressCircleModule }   from '@angular2-material/progress-circle/progress-circle';
import { MdRadioModule }            from '@angular2-material/radio/radio';
import { MdSidenavModule }          from '@angular2-material/sidenav/sidenav';
import { MdSlideToggleModule }      from '@angular2-material/slide-toggle/slide-toggle';
import { MdTabsModule }             from '@angular2-material/tabs/tabs';
import { MdToolbarModule }          from '@angular2-material/toolbar/toolbar';
import { MdRippleModule }           from '@angular2-material/core/ripple/ripple';
import { PortalModule }             from '@angular2-material/core/portal/portal-directives';
import { OverlayModule }            from '@angular2-material/core/overlay/overlay-directives';
import { RtlModule }                from '@angular2-material/core/rtl/dir';

import {
    FIREBASE_PROVIDERS,
    defaultFirebase }       from 'angularfire2';

import { firebaseConfig } from '../'



@NgModule({
    imports: [],
    exports: [
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
        MdRippleModule,
        PortalModule,
        OverlayModule,
        RtlModule
    ],
    providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase(firebaseConfig)
    ]
})
export class SharedModule { }
