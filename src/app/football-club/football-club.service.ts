import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { FootballClub } from "./football-club";
import { FOOTBALLCLUBS } from "./mock-football-club";

@Injectable()
export class FootballClubService {
	constructor(private http: HttpClient) {}

	/**
	 * Function to get the list of the football club
	 *
	 * @return {*}  {FootballClub[]}
	 * @memberof FootballClubService
	 */
	getFootballClubList(): Observable<FootballClub[]> {
		return this.http.get<FootballClub[]>("api/football-clubs").pipe(
			tap((footballClubList: any) => console.table(footballClubList)),
			catchError((error) => {
				console.log(error);
				return of([]);
			})
		);
	}

	/**
	 * Function to get a football club by his id
	 *
	 * @param {number} footballClubId
	 * @return {*}  {(FootballClub | undefined)}
	 * @memberof FootballClubService
	 */
	getFootballClubById(
		footballClubId: number
	): Observable<FootballClub | undefined> {
		return this.http
			.get<FootballClub>(`api/football-clubs/${footballClubId}`)
			.pipe(
				tap((footballClub) => console.log(footballClub)),
				catchError((error) => {
					console.log(error);
					return of(undefined);
				})
			);
	}

	/**
	 * Function to get the leagues of the football clubs
	 *
	 * @return {*}  {string[]}
	 * @memberof FootballClubService
	 */
	getFootballClubLeague(): string[] {
		return ["Ligue 1", "LaLiga", "PL", "Bundesliga", "Serie A"];
	}
}
