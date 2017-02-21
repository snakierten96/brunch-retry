import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';

import { IParty, ITables, IMenu } from '../store';
import { LineupActions, TableActions } from '../actions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;

  constructor(
    private _tableActions: TableActions,
    private _lineupActions: LineupActions) { }

}
