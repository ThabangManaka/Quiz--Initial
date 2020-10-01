import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FormsModule} from "@angular/forms";
import { CategoryComponent } from './category.component';



@NgModule({
    declarations: [CategoryComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: CategoryComponent}]),
		IonicModule,
	
		FormsModule
	]
})
export class DashboardModule {
}