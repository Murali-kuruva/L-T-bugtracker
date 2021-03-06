import { HttpClient } from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Project} from './../../models/projects';
 @Injectable()
export class projectApiservices{
    private serviceEndPoint = 'http://localhost:3000/projects/';

    constructor(private httpClient : HttpClient ){

    }
    getAll():Observable <Project[]>{
        return this.httpClient
        .get<Project[]>(this.serviceEndPoint)
       }
     save(projectData:Project):Observable <Project>{
            if(projectData.id===0)
            return this.httpClient
            .post<Project>(this.serviceEndPoint,projectData);
            else{
             return  this.httpClient
             .put<Project>(`${this.serviceEndPoint}/${projectData.id}`, projectData);   
            }
     }
     remove(projectData:Project):Observable<Project>{
         return this.httpClient
         .delete<Project>(`${this.serviceEndPoint}/${projectData.id}`);
     }

}
