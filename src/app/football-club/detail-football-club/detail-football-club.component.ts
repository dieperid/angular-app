import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FootballClub } from "../football-club";
import { FootballClubService } from "../football-club.service";

@Component({
	selector: "app-detail-football-club",
	templateUrl: "./detail-football-club.component.html",
	styles: [],
})
export class DetailFootballClubComponent implements OnInit {
	footballClubList: FootballClub[];
	footballClub: FootballClub | undefined;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private footballClubService: FootballClubService
	) {}

	ngOnInit() {
		// get the id of the club with the route
		const clubId: number | null = Number(
			this.route.snapshot.paramMap.get("id")
		);
		// get the club and find him in the list of club with the id
		if (clubId) {
			this.footballClubService
				.getFootballClubById(Number(clubId))
				.subscribe(
					(footballClub) => (this.footballClub = footballClub)
				);
		}
	}

	/**
	 * Function to delete a football club
	 *
	 * @param {FootballClub} footballClub
	 * @memberof DetailFootballClubComponent
	 */
	deleteFootballClub(footballClub: FootballClub) {
		this.footballClubService
			.deleteFootballClubById(footballClub.id)
			.subscribe(() => this.goToFootballClubList);
	}

	/**
	 * Function to go to the list of club
	 *
	 * @memberof DetailFootballClubComponent
	 */
	goToFootballClubList() {
		this.router.navigate(["/football-clubs"]);
	}

	/**
	 * Function to go to the edit form of the club
	 *
	 * @param {FootballClub} footballClub
	 * @memberof DetailFootballClubComponent
	 */
	goToEditFootballCLub(footballClub: FootballClub) {
		this.router.navigate(["/edit/football-club", footballClub.id]);
	}
}
