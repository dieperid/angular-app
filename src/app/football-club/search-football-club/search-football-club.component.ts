import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { FootballClub } from "../football-club";

@Component({
	selector: "app-search-football-club",
	templateUrl: "./search-football-club.component.html",
})
export class SearchFootballClubComponent implements OnInit {
	// example of a search
	// {..."a".."ab"..."abs"}
	searchParams = new Subject<string>();

	// {...footballClubList(a)...footballClubList(ab)...}
	footballClubs$: Observable<FootballClub[]>;

	constructor(private router: Router) {}

	ngOnInit(): void {
		throw new Error("Method not implemented.");
	}

	/**
	 * Function to search a specified club with some parameters
	 *
	 * @param {string} param
	 * @memberof SearchFootballClubComponent
	 */
	search(param: string) {
		// push next param in the search parameter array
		this.searchParams.next(param);
	}

	/**
	 * Function to go to the detail page of the football club
	 *
	 * @param {FootballClub} footballClub
	 * @memberof SearchFootballClubComponent
	 */
	goToDetailFootballClub(footballClub: FootballClub) {
		const link = ["/football-club", footballClub.id];
	}
}
