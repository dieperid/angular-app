import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<h1>Welcome to {{ footballLeagueList[0] }}!</h1>`,
})
export class AppComponent implements OnInit {
    // Creating a list of the football leagues
    footballLeagueList = ["Premier League", "Ligue A", "Ligue 1", "Bundesliga"];

    /**
     * Implements OnInit function from the OnInit interface
     */
    ngOnInit(): void {
        console.table(this.footballLeagueList);
        this.selectFootballLeague(this.footballLeagueList[0]);
    }

    /**
     * Function to display a football league name
     * @param footballLeagueName
     */
    selectFootballLeague(footballLeagueName: string) {
        console.log(
            `You have clicked on the football league ${footballLeagueName}`
        );
    }
}
