import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>Welcome to {{footballLeagueList[0]}}!</h1>`
})
export class AppComponent implements OnInit{
    footballLeagueList = ['Premier League', 'Ligue A', 'Ligue 1', 'Bundesliga'];

    ngOnInit(): void {
        console.table(this.footballLeagueList)
    }
}
