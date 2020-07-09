import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { Bug } from '../../models/bug';
@Component({
    selector : 'app-bug-stats',
    template : `
    <div>{{currentTime | date:'hh:mm:ss a'}}</div>
    <section class="stats">
        <span class="closed">{{bugs | closedCount}}</span>
        <span> / </span>
        <span>{{bugs.length}}</span>
    </section>
        `
        //changeDetection : ChangeDetectionStrategy.Default
    })
    export class BugStatsComponent implements OnInit, OnDestroy {

        @Input('data')
        bugs : Bug[] = [];
    
        currentTime : Date = new Date();
    
        private timer = null;
        
        ngOnInit(){
            this.timer = setInterval(() => {
                this.currentTime = new Date();
            }, 1000);
        }
    
        ngOnDestroy(){
            clearInterval(this.timer);
        }
    
    
    }
  