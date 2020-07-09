import { Component, OnInit } from '@angular/core';
import { Bug } from './../models/bug';
import { BugOperationsService } from './services/bugoperations.services'

@Component({
  selector: 'app-bugtracker',
  templateUrl: './bugtracker.component.html',
  styleUrls: ['./bugtracker.component.css']
})
export class BugtrackerComponent {
  bugs: Bug[] = [];
  
    showStats : boolean = true;
  
    sortAttr : string = '';
    sortDesc : boolean = false;
    
  constructor(private bugOperations : BugOperationsService){
    
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
            }

  onNewBugCreated(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
}
  onRemoveClick(bugToRemove: Bug){
   

      this.bugOperations
            .remove(bugToRemove)
            .subscribe(() => this.bugs = this.bugs.filter(bug => bug !== bugToRemove))
  }

     onBugNameClick(bugToToggle : Bug){
    this.bugOperations
        .toggle(bugToToggle)
        .subscribe(toggledBug => 
            this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
        );
}

  onRemoveClosedClick(){
   
      this.bugs
          .filter(bug => bug.isClosed)
          .forEach(closedBug => this.onRemoveClick(closedBug));
          
  }

// getClosedCount(){
  
//     return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
//   }
}

