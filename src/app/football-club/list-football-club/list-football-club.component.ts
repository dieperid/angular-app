import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VirtualTimeScheduler } from "rxjs";
import { FootballClub } from "../football-club";
import { FootballClubService } from "../football-club.service";

@Component({
	selector: "app-list-football-club",
	templateUrl: "./list-football-club.component.html",
})
export class ListFootballClubComponent implements OnInit {
	// Creating a list of the football club
	footballClubList: FootballClub[];

	constructor(
		private router: Router,
		private footballClubService: FootballClubService
	) {}

	ngOnInit() {
		// get the list of the club from the Service
		// subscribe to get the football list and push it to the component
		this.footballClubService
			.getFootballClubList()
			.subscribe(
				(footballClubList) => (this.footballClubList = footballClubList)
			);
	}

	goToFootballClub(footballClub: FootballClub) {
		this.router.navigate(["/football-club", footballClub.id]);
	}
}
