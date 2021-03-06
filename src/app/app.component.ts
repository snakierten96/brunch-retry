import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Action, combineReducers } from 'redux';
import * as createLogger from 'redux-logger';

import {
  IAppState,
  rootReducer,
  middleware,
  enhancers
} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    devtools: DevToolsExtension) {
      
    this._ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      devtools.isEnabled() ? [ ...enhancers, devtools.enhancer() ] : []
    );
    
  }

  ngOnInit(): void {
    
  }
}
