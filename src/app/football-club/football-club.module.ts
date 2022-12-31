import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListFootballClubComponent } from "./list-football-club/list-football-club.component";
import { DetailFootballClubComponent } from "./detail-football-club/detail-football-club.component";
import { BorderCardDirective } from "./border-card.directive";
import { FootballClubLeagueColorPipe } from "./football-club-league-color.pipe";
import { RouterModule, Routes } from "@angular/router";

const footballClubRoutes: Routes = [
	{ path: "football-clubs", component: ListFootballClubComponent },
	{ path: "football-club/:id", component: DetailFootballClubComponent },
];

@NgModule({
	declarations: [
		ListFootballClubComponent,
		DetailFootballClubComponent,
		BorderCardDirective,
		FootballClubLeagueColorPipe,
	],
	imports: [CommonModule, RouterModule.forChild(footballClubRoutes)],
})
export class FootballClubModule {}