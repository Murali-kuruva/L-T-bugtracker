import {projectApiservices} from '../services/projectApi.services';
import {Observable} from 'rxjs';
import { Injectable} from '@angular/core';
import {Project} from '../../models/projects';

@Injectable()
 export class ProjectOperationsService{
     constructor(private projectapi:projectApiservices){}
     createNew( projectName: string):Observable<Project>{
        const newBug = {
            id: 0,
            name: projectName
         };
        return  this.projectapi.save(newBug);

     }
    //  toggle(bugToToggle: Project): Observable<Project> {
    //     const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    //     return this.projectapi.save(toggledBug);

    // }

    getAll(): Observable<Project[]> {
        return this.projectapi.getAll();
    }
     remove(project: Project) : Observable<any> {
        return this.projectapi.remove(project);
    }
}