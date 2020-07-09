import { Component, OnInit } from '@angular/core';
import { BugApiService } from '../services/bugApi.services';
import { Bug } from '../../models/bug';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector : 'bug-details',
	template : `
		<h3>{{bug?.name}}</h3>
		<hr />

		<div><b>{{bug?.isClosed}}</b></div>
		
		
	`
})
export class BugDetailsComponent implements OnInit{

	bug : Bug;

	ngOnInit(){
		console.dir(this.route.params);

		this.route.params
			.subscribe(param => this.bugServer.get(param.id)
				.subscribe(bug => {
					console.log(bug);
					this.bug = bug
				}));
	}
	constructor(private route: ActivatedRoute, private bugServer : BugApiService){

	}

}