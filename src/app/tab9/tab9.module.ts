import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab9Page } from './tab9.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab9PageRoutingModule } from './tab9-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab9Page }]),
    Tab9PageRoutingModule,
  ],
  declarations: [Tab9Page]
})
export class Tab9PageModule {}
