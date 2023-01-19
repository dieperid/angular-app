import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { FootballClub } from "./football-club";

@Injectable()
export class FootballClubService {
	constructor(private http: HttpClient) {}

	/**
	 * Function to add a football club (server side)
	 *
	 * @param {FootballClub} footballClub
	 * @return {*}  A FootballClub object
	 * @memberof FootballClubService
	 */
	addFootballClub(footballClub: FootballClub): Observable<FootballClub> {
		const httpOptions = {
			headers: new HttpHeaders({ "Content-Type": "application/json" }),
		};

		return this.http
			.post<FootballClub>("api/footballClubs", footballClub, httpOptions)
			.pipe(
				tap((response) => this.log(response)),
				catchError((error) => this.handleError(error, undefined))
			);
	}

	/**
	 * Function to update footballClub on server side (save the data)
	 *
	 * @param {FootballClub} footballClub
	 * @return {*}  {(Observable<null>)}
	 * @memberof FootballClubService
	 */
	updateFootballClub(footballClub: FootballClub): Observable<null> {
		const httpOptions = {
			headers: new HttpHeaders({ "Content-Type": "application/json" }),
		};

		return this.http
			.put("api/footballClubs", footballClub, httpOptions)
			.pipe(
				tap((response) => this.log(response)),
				catchError((error) => this.handleError(error, undefined))
			);
	}

	/**
	 * Function to delete a football club by his id
	 *
	 * @param {Number} footballClubId
	 * @return {*}  {Observable<null>}
	 * @memberof FootballClubService
	 */
	deleteFootballClubById(footballClubId: Number): Observable<null> {
		return this.http.delete(`api/footballClubs/${footballClubId}`).pipe(
			tap((response) => this.log(response)),
			catchError((error) => this.handleError(error, undefined))
		);
	}

	/**
	 * Function to get the list of the football club
	 *
	 * @return {*}  {FootballClub[]}
	 * @memberof FootballClubService
	 */
	getFootballClubList(): Observable<FootballClub[]> {
		return this.http.get<FootballClub[]>("api/footballClubs").pipe(
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
			.get<FootballClub>(`api/footballClubs/${footballClubId}`)
			.pipe(
				tap((response) => this.log(response)),
				catchError((error) => this.handleError(error, undefined))
			);
	}

	/**
	 * Function to search a club by using a parameter
	 *
	 * @param {string} param
	 * @return {*}  {Observable<FootballClub[]>}
	 * @memberof FootballClubService
	 */
	searchFootballClubList(param: string): Observable<FootballClub[]> {
		if (param.length <= 1) {
			return of([]);
		}
		return this.http
			.get<FootballClub[]>(`api/footballClubs/?name=${param}`)
			.pipe(
				tap((response) => this.log(response)),
				catchError((error) => this.handleError(error, []))
			);
	}

	/**
	 * Function to get the leagues of the football clubs
	 *
	 * @return {*}  {string[]}
	 * @memberof FootballClubService
	 */
	getFootballClubLeague(): string[] {
		return ["Default", "Ligue 1", "LaLiga", "PL", "Bundesliga", "Serie A"];
	}

	/**
	 * Function to return an error message
	 *
	 * @private
	 * @param {Error} error
	 * @param {*} errorValue
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
	 * @param {*} response
	 * @memberof FootballClubService
	 */
	private log(response: any) {
		console.table(response);
	}
}
