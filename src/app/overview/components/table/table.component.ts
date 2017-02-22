import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IParty } from '../../../store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() table: any;
  @Input() parties: Observable<IParty>;
  @Output() seatParty: EventEmitter<any> = new EventEmitter();
  partyId: number = -1;
  
}
