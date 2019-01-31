import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { ManageLabelsComponent } from './manage-labels/manage-labels.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageLabelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {
    let enhancers = [];

    if (isDevMode() && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      enhancers);
  }
}
