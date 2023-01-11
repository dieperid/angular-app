import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FootballClub } from "../football-club";
import { FootballClubService } from "../football-club.service";

@Component({
	selector: "app-edit-football-club",
	template: `<h2 class="center">Edit {{ footballClub?.name }}</h2>
		<p *ngIf="footballClub" class="center">
			<img [src]="footballClub.picture" alt="" />
		</p>
		<app-football-club-form
			*ngIf="footballClub"
			[footballClub]="footballClub"
		>
		</app-football-club-form>`,
	styles: [],
})
export class EditFootballClubComponent implements OnInit {
	footballClub: FootballClub | undefined;

	constructor(
		private route: ActivatedRoute,
		private footballClubService: FootballClubService
	) {}

	ngOnInit(): void {
		const footballClubId: number | null = Number(
			this.route.snapshot.paramMap.get("id")
		);

		if (footballClubId) {
			this.footballClub = this.footballClubService.getFootballClubById(
				+footballClubId
			);
		} else {
			this.footballClub = undefined;
		}
	}
}
