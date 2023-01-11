import { Component, Input } from "@angular/core";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";
import { FootballClubService } from "../football-club.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-football-club-form",
	templateUrl: "./football-club-form.component.html",
	styleUrls: ["./football-club-form.component.css"],
})
export class FootballClubFormComponent {
	@Input() footballClub: FootballClub;
	leagues: string[];

	constructor(
		private footballClubService: FootballClubService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.leagues = this.footballClubService.getFootballClubLeague();
	}

	/**
	 * Function to detect if the club has a leagues
	 *
	 * @param {string} league
	 * @return {*}  {boolean}
	 * @memberof FootballClubFormComponent
	 */
	hasLeague(league: string): boolean {
		return this.footballClub.leagues.includes(league);
	}

	/**
	 * Function to get the selected leagues
	 *
	 * @param {Event} $event
	 * @param {string} league
	 * @memberof FootballClubFormComponent
	 */
	selectLeague($event: Event, league: string): void {
		const isChecked = ($event.target as HTMLInputElement).checked;

		if (isChecked) {
			this.footballClub.leagues.push(league);
		} else {
			const index = this.footballClub.leagues.indexOf(league);
			this.footballClub.leagues.splice(index, 1);
		}
	}

	/**
	 * Function to check if he can have the league (minimum 1 - maximum 2)
	 *
	 * @param {string} league
	 * @return {*}  {boolean}
	 * @memberof FootballClubFormComponent
	 */
	isLeaguesValid(league: string): boolean {
		if (this.footballClub.leagues.length == 1) {
			return false;
		}
		if (this.footballClub.leagues.length > 2 && !this.hasLeague(league)) {
			return false;
		}
		return true;
	}

	/**
	 * Function to tell that the submission has worked
	 *
	 * @memberof FootballClubFormComponent
	 */
	onSubmit() {
		console.log("Form as been submitted");
		this.router.navigate(["/football-club", this.footballClub.id]);
	}
}
