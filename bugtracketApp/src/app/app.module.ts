import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BugtrackerComponent } from './bugtracker/bugtracker.component';
// import { ElapsedPipe } from './bugtracker/pipes/elapsed.pipe';
import { BugOperationsService} from './bugtracker/services/bugoperations.services';
import { BugStorageService } from './bugtracker/services/bugstorage.service';
// import { SortPipe} from './sort.pipe';
import {BugApiService} from './bugtracker/services/bugApi.services'
import {BugStatsComponent} from './bugtracker/views/bugStats.componenet';
import {ClosedCountPipe} from './bugtracker/pipes/closedCount.pipe';
import {BugEditComponent}  from '../app/bugtracker/views/bugEdit.componenet';
import {BugDetailsComponent} from '../app/bugtracker/views/bugDetails.component';
 import {UtilsModule} from '../utils/utils.module';
 import {HttpClientModule} from '@angular/common/http';
import { ProjecttrackerComponent } from '../app/projecttracker/projecttracker.component';

import { projectApiservices} from './projecttracker/services/projectApi.services';
import { ProjectOperationsService} from './projecttracker/services/projectoperations.services'
import {projectEditComponent} from './projecttracker/views/projectEdit.componenet';
import { from } from 'rxjs';
import {LoggedInGuard} from './Auth/LoggedInGuard';
import {LoginComponent} from './Auth/Login.component';
import {RouterModule, Routes} from '@angular/router';
import {SelecttrackerComponent  } from '../app/selecttracker/selecttracker.component';
import {ProjectStorageService} from '../app/projecttracker/services/projectstorage.service';
import {projectStatsComponent} from '../app/projecttracker/views/projectstats.component';
let routes : Routes = [
  {path : '', redirectTo : '/bugs', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path:'selecttracker',component:SelecttrackerComponent},
  {path:'projects' ,component:ProjecttrackerComponent},
  {path:'addnewproject',component:projectEditComponent},
  {path : 'add', component : BugEditComponent},
  {path : 'details/:id', component : BugDetailsComponent},
  {path : 'bugs', component : BugtrackerComponent, 
    canActivate : [LoggedInGuard] }
]
  @NgModule({
  declarations: [
    AppComponent,
    BugtrackerComponent,
    BugStatsComponent,
    ClosedCountPipe,
    BugEditComponent,
    ProjecttrackerComponent,
    projectEditComponent,
    LoginComponent,
    SelecttrackerComponent,
    projectStatsComponent,
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugApiService,
    projectApiservices,
    ProjectOperationsService,
    ProjectStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
