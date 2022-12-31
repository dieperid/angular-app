import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FootballClubModule } from "./football-club/football-club.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
	declarations: [AppComponent, PageNotFoundComponent],
	imports: [BrowserModule, AppRoutingModule, FootballClubModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
