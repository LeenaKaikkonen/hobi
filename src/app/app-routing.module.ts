import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { Tab4Page } from './tab4/tab4.page';
import { Tab5Page } from './tab5/tab5.page';
import { Tab6Page } from './tab6/tab6.page';
import { Tab7Page } from './tab7/tab7.page';
import { Tab8Page } from './tab8/tab8.page';
import { Tab9Page } from './tab9/tab9.page';
import { Tab10Page } from './tab10/tab10.page';
import { Tab11Page } from './tab11/tab11.page';
import { Tab12Page } from './tab12/tab12.page';
import { Tab13Page } from './tab13/tab13.page';
import { Tab14Page } from './tab14/tab14.page';

const routes: Routes = [
  { path: '', component: Tab1Page },
  { path: 'choices', component: Tab2Page },
  { path: 'select_watersports', component: Tab3Page },
  { path: 'Jetski', component: Tab4Page },
  { path: 'Surfing', component: Tab5Page },
  { path: 'Swimming', component: Tab6Page },
  { path: 'Sailing', component: Tab7Page },
  { path: 'Kayaks', component: Tab8Page },
  { path: 'sign', component: Tab9Page },
  { path: 'art', component: Tab10Page },
  { path: 'Choir', component: Tab11Page },
  { path: 'Photography', component: Tab12Page },
  { path: 'Piano', component: Tab13Page },
  { path: 'Guitar', component: Tab14Page },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
