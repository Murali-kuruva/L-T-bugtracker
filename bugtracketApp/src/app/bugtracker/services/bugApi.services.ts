import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bug }  from  '../../models/bug';
import { Injectable } from "@angular/core";

@Injectable()
export class BugApiService{

    private serviceEndPoint = 'http://localhost:3000/bugs/';

    constructor(private httpClient : HttpClient ){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(this.serviceEndPoint);
    }
    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.httpClient
                .post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.httpClient
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }
    get(id) : Observable<Bug>{
		return this.httpClient
			.get<Bug>(`${this.serviceEndPoint}/${id}`);
	}
    remove(bugData : Bug) : Observable<any>{
        return this.httpClient
            .delete<Bug>(`${this.serviceEndPoint}/${bugData.id}`);
    }
} 
 