import { Component, OnInit } from "@angular/core";
import { FootballClub } from "../football-club";

@Component({
	selector: "app-add-football-club",
	template: `
		<h2 class="center">Add a football club</h2>
		<app-football-club-form [footballClub]="footballClub">
		</app-football-club-form>
	`,
	styles: [],
})
export class AddFootballClubComponent implements OnInit {
	footballClub: FootballClub;

	ngOnInit(): void {
		this.footballClub = new FootballClub();
	}
}
