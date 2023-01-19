import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
	debounceTime,
	distinctUntilChanged,
	Observable,
	Subject,
	switchMap,
} from "rxjs";
import { FootballClub } from "../football-club";
import { FootballClubService } from "../football-club.service";

@Component({
	selector: "app-search-football-club",
	templateUrl: "./search-football-club.component.html",
})
export class SearchFootballClubComponent implements OnInit {
	searchParams = new Subject<string>();
	footballClubs$: Observable<FootballClub[]>;

	constructor(
		private router: Router,
		private footballClubService: FootballClubService
	) {}

	ngOnInit(): void {
		this.footballClubs$ = this.searchParams.pipe(
			// {..."a"."ab"..."abs"."ab"..."abs"}
			debounceTime(300),
			// {..."ab"..."ab"..."abs"}
			distinctUntilChanged(),
			// {..."ab"......."abs"}
			switchMap((param) =>
				this.footballClubService.searchFootballClubList(param)
			)
			// {...footballClubList(ab)...footballClubList(abs)...}
		);
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
		this.router.navigate(link);
	}
}
