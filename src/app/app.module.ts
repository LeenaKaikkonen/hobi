import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  declarations: [AppComponent, Tab1Page, Tab2Page, Tab3Page, Tab4Page, Tab5Page, Tab6Page, Tab7Page, Tab8Page, Tab9Page, Tab10Page, Tab11Page, Tab12Page, Tab13Page, Tab14Page, ExploreContainerComponent ],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
