import { AdvancedSearchResultComponent } from './advanced-search-result/advanced-search-result.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ScoutUserseditComponent } from './scout-usersedit/scout-usersedit.component';
import { SavedScheduleComponent } from './saved-schedule/saved-schedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'saved-schedule', component: SavedScheduleComponent },

  { path: 'scout-usersedit', component: ScoutUserseditComponent },

  { path: 'report-page', component: ReportPageComponent },

  { path: 'advanced-search-result', component: AdvancedSearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
