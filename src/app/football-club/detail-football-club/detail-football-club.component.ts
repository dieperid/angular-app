import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FootballClub } from "../football-club";
import { FOOTBALLCLUBS } from "../mock-football-club";

@Component({
	selector: "app-detail-football-club",
	templateUrl: "./detail-football-club.component.html",
	styles: [],
})
export class DetailFootballClubComponent implements OnInit {
	footballClubList: FootballClub[];
	footballClub: FootballClub | undefined;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.footballClubList = FOOTBALLCLUBS;

		// get the id of the club with the route
		const clubId: number | null = Number(
			this.route.snapshot.paramMap.get("id")
		);
		// get the club and find him in the list of club with the id
		if (clubId) {
			this.footballClub = this.footballClubList.find(
				(club) => club.id === clubId
			);
		}
	}

	goToFootballClubList() {
		this.router.navigate(["/football-clubs"]);
	}
}
