import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./border-card.directive";
import { FootballClubLeagueColorPipe } from './football-club-league-color.pipe';

@NgModule({
	declarations: [AppComponent, BorderCardDirective, FootballClubLeagueColorPipe],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
