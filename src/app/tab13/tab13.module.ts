import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab13Page } from './tab13.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab13PageRoutingModule } from './tab13-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab13Page }]),
    Tab13PageRoutingModule,
  ],
  declarations: [Tab13Page]
})
export class Tab13PageModule {}
