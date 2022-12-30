import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./border-card.directive";
import { FootballClubLeagueColorPipe } from "./football-club-league-color.pipe";
import { ListFootballClubComponent } from "./list-football-club/list-football-club.component";
import { DetailFootballClubComponent } from "./detail-football-club/detail-football-club.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
	declarations: [
		AppComponent,
		BorderCardDirective,
		FootballClubLeagueColorPipe,
		ListFootballClubComponent,
		DetailFootballClubComponent,
		PageNotFoundComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
