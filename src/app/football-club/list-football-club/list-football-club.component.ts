import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";

@Component({
	selector: "app-list-football-club",
	templateUrl: "./list-football-club.component.html",
})
export class ListFootballClubComponent {
	// Creating a list of the football club
	footballClubList: FootballClub[] = FOOTBALLCLUBS;

	constructor(private router: Router) {}

	goToFootballClub(footballClub: FootballClub) {
		this.router.navigate(["/football-club", footballClub.id]);
	}
}
