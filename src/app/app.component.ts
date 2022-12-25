import { Component, OnInit } from "@angular/core";
import { FOOTBALLCLUBS } from "./mock-football-club";
import { FootballClub } from "./football-club";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    // Creating a list of the football club
    footballClubList: FootballClub[] = FOOTBALLCLUBS;
    footballClubSelected: FootballClub | undefined;

    /**
     * Implements OnInit function from the OnInit interface
     */
    ngOnInit(): void {
        console.table(this.footballClubList);
    }
    aaaa

    /**
     * Function to display a football club name
     * @param footballClubName
     */
    selectFootballClub(footbalClubId: string) {
        const club: FootballClub | undefined = this.footballClubList.find(
            (club) => club.id === Number(footbalClubId)
        );
        if (club) {
            console.log(`You have requested the football club ${club.name}`);
            this.footballClubSelected = club;
        } else {
            console.log(`You requested a club that doesn't exist`);
            this.footballClubSelected = undefined;
        }
    }
}
