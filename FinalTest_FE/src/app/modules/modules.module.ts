import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { SavedScheduleComponent } from './saved-schedule/saved-schedule.component';
import { ScoutUserseditComponent } from './scout-usersedit/scout-usersedit.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';


@NgModule({
  declarations: [
    SavedScheduleComponent,
    ScoutUserseditComponent,
    ReportPageComponent,
    AdvancedSearchResultComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
