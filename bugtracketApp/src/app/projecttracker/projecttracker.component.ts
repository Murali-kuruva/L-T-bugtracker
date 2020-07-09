import { Component, OnInit } from '@angular/core';
import { ProjectOperationsService} from '../projecttracker/services/projectoperations.services';
import {Project} from '../models/projects';
@Component({
  selector: 'app-projecttracker',
  templateUrl: './projecttracker.component.html',
  styleUrls: ['./projecttracker.component.css']
})
export class ProjecttrackerComponent   {

  projects:Project[]=[];
  showStats : boolean = true;
  sortAttr : string = '';
  sortDesc : boolean = false;
  constructor(private projectoperations:ProjectOperationsService) {
     this.projectoperations.getAll().subscribe(projects=>this.projects=projects)
   }

   onNewprojectCreated(newProject : Project){
    this.projects = [...this.projects, newProject]
}
onRemoveClick(projectToRemove: Project){
   

  this.projectoperations
        .remove(projectToRemove)
        .subscribe(() => this.projects = this.projects.filter(project => project !== projectToRemove))
}

 

}
