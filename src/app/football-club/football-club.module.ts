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
import { EditFootballClubComponent } from "./edit-football-club/edit-football-club.component";
import { AddFootballClubComponent } from "./add-football-club/add-football-club.component";

const footballClubRoutes: Routes = [
	{ path: "edit/football-club/:id", component: EditFootballClubComponent },
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
		EditFootballClubComponent,
		AddFootballClubComponent,
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
