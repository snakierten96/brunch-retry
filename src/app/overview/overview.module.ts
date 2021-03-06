import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { LineupComponent } from './components/lineup/lineup.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    OverviewComponent,
    LineupComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    OverviewRoutingModule
  ],
})
export class OverviewModule { }
