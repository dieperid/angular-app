import { Component } from "@angular/core";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";

@Component({
	selector: "app-list-football-club",
	templateUrl: "./list-football-club.component.html",
})
export class ListFootballClubComponent {
	// Creating a list of the football club
	footballClubList: FootballClub[] = FOOTBALLCLUBS;
}
