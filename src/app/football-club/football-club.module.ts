import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListFootballClubComponent } from "./list-football-club/list-football-club.component";
import { DetailFootballClubComponent } from "./detail-football-club/detail-football-club.component";
import { BorderCardDirective } from "./border-card.directive";
import { FootballClubLeagueColorPipe } from "./football-club-league-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { FootballClubService } from "./football-club.service";
import { FormsModule } from "@angular/forms";
import { FootballClubFormComponent } from "./football-club-form/football-club-form.component";

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
		FootballClubFormComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(footballClubRoutes),
	],
	// Inject the service only on this module
	providers: [FootballClubService],
})
export class FootballClubModule {}
