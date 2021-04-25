import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { Tab4Page } from '../tab4/tab4.page';
import { Tab5Page } from '../tab5/tab5.page';
import { Tab6Page } from '../tab6/tab6.page';
import { Tab7Page } from '../tab7/tab7.page';
import { Tab8Page } from '../tab8/tab8.page';


const routes: Routes = [
  { path: '', component: Tab1Page },
  { path: 'choices', component: Tab2Page },
  { path: 'select_watersports', component: Tab3Page },
  { path: 'Jetski', component: Tab4Page },
  { path: 'Kayaks', component: Tab5Page },
  { path: 'Swimming', component: Tab6Page },
  { path: 'Surfing', component: Tab7Page },
  { path: 'Sailing', component: Tab8Page },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
