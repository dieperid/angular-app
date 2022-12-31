import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
		private footballService: FootballClubService
	) {}

	ngOnInit() {
		// get the list of the club from the Service
		this.footballClubList = this.footballService.getFootballClubList();
	}

	goToFootballClub(footballClub: FootballClub) {
		this.router.navigate(["/football-club", footballClub.id]);
	}
}
