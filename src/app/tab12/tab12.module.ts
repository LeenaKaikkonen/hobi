import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab12Page } from './tab12.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab12PageRoutingModule } from './tab12-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab12Page }]),
    Tab12PageRoutingModule,
  ],
  declarations: [Tab12Page]
})
export class Tab12PageModule {}
