import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { FootballClub } from "./football-club";

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
			tap((response) => this.log(response)),
			catchError((error) => this.handleError(error, []))
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
				tap((response) => this.log(response)),
				catchError((error) => this.handleError(error, undefined))
			);
	}

	/**
	 * Function to return an error message
	 *
	 * @private
	 * @param {Error} error
	 * @param {([] | undefined)} errorValue
	 * @return {*}
	 * @memberof FootballClubService
	 */
	private handleError(error: Error, errorValue: any) {
		console.error(error);
		return of(errorValue);
	}

	/**
	 * Function to log a response
	 *
	 * @private
	 * @param {(FootballClub[] | FootballClub | undefined)} response
	 * @memberof FootballClubService
	 */
	private log(response: FootballClub[] | FootballClub | undefined) {
		console.table(response);
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
