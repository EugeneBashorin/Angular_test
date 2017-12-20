import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
//import {Input} from '@angular/forms';
import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {Child_2_Component} from './child2.component';
import {Child_less3_Component} from './child_less3.component';
import {Child_less3_1_Component} from './child_less3_1.component';
import {Child_less3_2_Component} from './child_less3_2.component';
import {Child_less3_3_Component} from './child_less3_3.component';
import {Child_less3_4_Component} from './child_less3_4.component';
import {Child_less3_5_Component} from './child_less3_5.component';
import {Child_less3_6_Component} from './child_less3_6.component';
import {Child_less3_6a_Component} from './child_less3_6a.component';
import {Child_less3_6b_Component} from './child_less3_6b.component';


@NgModule({
	imports:[BrowserModule, FormsModule],
	declarations:[AppComponent,ChildComponent,
				  Child_2_Component, Child_less3_Component,
				  Child_less3_1_Component, Child_less3_2_Component,
				  Child_less3_3_Component, Child_less3_4_Component,
				  Child_less3_5_Component, Child_less3_6_Component,
				  Child_less3_6a_Component, Child_less3_6b_Component],
	bootstrap:[AppComponent]
})

export class AppModule{}