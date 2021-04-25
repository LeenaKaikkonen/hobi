import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab14Page } from './tab14.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab14PageRoutingModule } from './tab14-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab14Page }]),
    Tab14PageRoutingModule,
  ],
  declarations: [Tab14Page]
})
export class Tab14PageModule {}
