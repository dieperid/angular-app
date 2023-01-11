import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FootballClubModule } from "./football-club/football-club.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
	declarations: [AppComponent, PageNotFoundComponent],
	/**
	 * Angular load the module in order (from Browser to AppRouting)
	 * So we have to load FootballClubModule before AppRoutingModule
	 * We have to load the football club before the routes
	 */
	imports: [BrowserModule, FormsModule, FootballClubModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
