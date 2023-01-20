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
import { SearchFootballClubComponent } from "./search-football-club/search-football-club.component";
import { LoaderComponent } from "./loader/loader.component";
import { AuthGuard } from "../auth.guard";

const footballClubRoutes: Routes = [
	{
		path: "edit/football-club/:id",
		component: EditFootballClubComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "football-club/add",
		component: AddFootballClubComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "football-clubs",
		component: ListFootballClubComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "football-club/:id",
		component: DetailFootballClubComponent,
		canActivate: [AuthGuard],
	},
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
		SearchFootballClubComponent,
		LoaderComponent,
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
