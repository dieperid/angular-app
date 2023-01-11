import { Component, Input } from "@angular/core";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";
import { FootballClubService } from "../football-club.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-football-club-form",
	templateUrl: "./football-club-form.component.html",
	styles: [],
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

	onSubmit() {
		console.log("Form as been submitted");
		this.router.navigate(["/football-club", this.footballClub.id]);
	}
}
