// import { Bug } from  '../../models/bug';
// import {BugStorageService} from './bugstorage.service';
// import { Injectable } from '@angular/core';
// import * as moment from 'moment';
// @Injectable()
// export class BugOperationsService{
//     constructor(private bugStorage : BugStorageService){ 
//     }
//     private currentBugId :number = 0;
    
//     createNew(bugName : string):Bug{
//         const newBug = {
//             id : ++this.currentBugId,
//             name : bugName,
//             isClosed : false,
//             createdAt : new Date()
//         };
//         return newBug;
//     }
    
//     toggle(bugToToggle : Bug) : void {
//         bugToToggle.isClosed = !bugToToggle.isClosed;
//     }
//     remove(bug : Bug) {
//         this.bugStorage.remove(bug);
//     }
//     getAll() : Bug[] {
//         return this.bugStorage.getAll();
//     }
// }
import { BugApiService } from "../services/bugApi.services";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Bug } from  '../../models/bug';
@Injectable()
export class BugOperationsService{
    constructor(private bugApi: BugApiService) {

    }
    createNew(bugName: string): Observable<Bug> {
        const newBug = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugApi.save(newBug);

    }

    toggle(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);

    }

    getAll(): Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    remove(bug: Bug) : Observable<any> {
        return this.bugApi.remove(bug);
    }
}