import { Component, Input } from "@angular/core";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";
import { FootballClubService } from "../football-club.service";

@Component({
	selector: "app-football-club-form",
	templateUrl: "./football-club-form.component.html",
	styles: [],
})
export class FootballClubFormComponent {
	@Input() footballClub: FootballClub;
	leagues: string[];

	constructor(private footballClubService: FootballClubService) {}

	ngOnInit(): void {
		this.leagues = this.footballClubService.getFootballClubLeague();
	}

	/**
	 * Function to detect if the club has a league
	 *
	 * @param {string} league
	 * @return {*}  {boolean}
	 * @memberof FootballClubFormComponent
	 */
	hasPlayer(league: string): boolean {
		return this.footballClub.league.includes(league);
	}

	/**
	 * Function to get the selected league
	 *
	 * @param {Event} $event
	 * @param {string} league
	 * @memberof FootballClubFormComponent
	 */
	selectLeague($event: Event, league: string): void {
		const isChecked = ($event.target as HTMLInputElement).checked;

		if (isChecked) {
			this.footballClub.league.push(league);
		} else {
			const index = this.footballClub.league.indexOf(league);
			this.footballClub.league.splice(index, 1);
		}
	}

	onSubmit() {}
}
