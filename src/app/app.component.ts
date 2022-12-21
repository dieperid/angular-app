import { Component, OnInit } from "@angular/core";
import { FOOTBALLCLUBS } from "./mock-football-club";
import { FootballClub } from "./football-club";

@Component({
    selector: "app-root",
    template: `<h1>List of football club</h1>`,
})
export class AppComponent implements OnInit {
    // Creating a list of the football club
    footballClubList: FootballClub[] = FOOTBALLCLUBS;

    /**
     * Implements OnInit function from the OnInit interface
     */
    ngOnInit(): void {
        console.table(this.footballClubList);
        this.selectFootballClub(this.footballClubList[0]);
    }

    /**
     * Function to display a football club name
     * @param footballClubName
     */
    selectFootballClub(footballClub: FootballClub) {
        console.log(
            `You have clicked on the football league ${footballClub.name}`
        );
    }
}
