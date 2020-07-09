import { Component, Output, EventEmitter } from "@angular/core";
import { Project } from '../../models/projects';
import {ProjectOperationsService  } from '../services/projectoperations.services';
@Component({
    selector : 'app-project-edit',
    template : `
        <section class="edit">
        
            <label for="">project Name :</label>
            <input type="text" (input)="newprojectName=$event.target.value">
            <input type="button" value="Add new project" (click)="onAddNewClick()">
        </section>
        <div>
        <a [routerLink]="['/projects']">Back</a>
        </div>
    `
})
export class projectEditComponent{

    newprojectName: string = '';

    @Output()
    projectCreated : EventEmitter<Project> = new EventEmitter<Project>();

    constructor(private projectOperations : ProjectOperationsService ){

    }

    onAddNewClick() {
        //var newBug: Bug = this.bugOperations.createNew(this.newBugName);
        this.projectOperations
            .createNew(this.newprojectName)
            .subscribe(newBug => this.projectCreated.emit(newBug));
        //the following line should be in the parent component
        //this.bugs = [...this.bugs, newBug];
        //this.bugCreated.emit(newBug);
    }
}