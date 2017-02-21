import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Action } from 'redux';

import { IAppState } from '../store';
import {
  PARTY_SEATED,
  ORDER_STARTED,
  ORDER_COMPLETED,
  ORDER_DELIVERED,
  ITEM_ADDED,
  ITEM_REMOVED,
  BILL_PAID,
  TABLE_CLEANED
} from '../constants';


@Injectable()
export class TableActions {
  constructor(private _ngRedux: NgRedux<IAppState>) { }

  seatParty(tableId) {
    return this._ngRedux.dispatch({
      type: PARTY_SEATED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  startOrder(tableId) {
    return this._ngRedux.dispatch({
      type: ORDER_STARTED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  completeOrder(tableId) {
    return this._ngRedux.dispatch({
      type: ORDER_COMPLETED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  deliverOrder(tableId) {
    return this._ngRedux.dispatch({
      type: ORDER_DELIVERED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  addItemToOrder({ tableId, menuId }) {
    return this._ngRedux.dispatch({
      type: ITEM_ADDED,
      payload: {
        tableId: parseInt(tableId, 10),
        menuId
      }
    });
  }

  removeItemFromOrder({ tableId, menuId }) {
    return this._ngRedux.dispatch({
      type: ITEM_REMOVED,
      payload: {
        tableId: parseInt(tableId, 10),
        menuId
      }
    });
  }

  payBill(tableId) {
    return this._ngRedux.dispatch({
      type: BILL_PAID,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

  cleanTable(tableId) {
    return this._ngRedux.dispatch({
      type: TABLE_CLEANED,
      payload: {
        tableId: parseInt(tableId, 10)
      }
    });
  }

}