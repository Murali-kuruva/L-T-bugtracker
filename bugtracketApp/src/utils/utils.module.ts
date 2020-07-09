import {NgModule} from '@angular/core';
import {SortPipe} from './../app/sort.pipe';

import { from } from 'rxjs';
import {ElapsedPipe} from './../app/bugtracker/pipes/elapsed.pipe';
import {TrimTextPipe} from '../app/bugtracker/pipes/trimText.pipe';

import { Sortpipeproject} from './../app/projecttracker/pipes/sort.pipe';
 @NgModule({
    declarations : [
        SortPipe,
        ElapsedPipe,
        TrimTextPipe,
        Sortpipeproject
    ], 
    providers : [],
    bootstrap : [], 
    imports : [],
    exports : [
        SortPipe,
        ElapsedPipe,
        TrimTextPipe,
        Sortpipeproject
    ]
})
export class UtilsModule {

}