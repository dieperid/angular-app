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

    /**
     * Implements OnInit function from the OnInit interface
     */
    ngOnInit(): void {
        console.table(this.footballClubList);
    }

    /**
     * Function to display a football club name
     * @param footballClubName
     */
    selectFootballClub(event: MouseEvent) {
        const index: number = Number((event.target as HTMLInputElement).value);
        console.log(
            `You have clicked on the football club ${this.footballClubList[index].name}`
        );
    }
}
