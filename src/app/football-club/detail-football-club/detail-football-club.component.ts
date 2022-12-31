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
			this.footballClub =
				this.footballClubService.getFootballClubById(clubId);
		}
	}

	goToFootballClubList() {
		this.router.navigate(["/football-clubs"]);
	}
}
