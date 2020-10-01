import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CategoryComponent } from '../pages/category/category.component';
import { ScoreComponent } from '../pages/score/score.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
     CategoryComponent,
     ScoreComponent
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}