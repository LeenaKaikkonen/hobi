import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab7Page } from './tab7.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab7PageRoutingModule } from './tab7-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab7Page }]),
    Tab7PageRoutingModule,
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}
