import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { Project } from '../../models/projects';
@Component({
    selector : 'app-project-stats',
    template : `
    <div>{{currentTime | date:'hh:mm:ss a'}}</div>
    <section class="stats">
      
        <span>{{projects.length}}</span>
    </section>
        `
        //changeDetection : ChangeDetectionStrategy.Default
    })
    export class projectStatsComponent implements OnInit, OnDestroy {

        @Input('data')
        projects : Project[] = [];
    
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
  