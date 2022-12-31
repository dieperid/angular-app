import { Injectable } from "@angular/core";
import { FootballClub } from "./football-club";
import { FOOTBALLCLUBS } from "./mock-football-club";

@Injectable()
export class FootballClubService {
	/**
	 * Function to get the list of the football club
	 *
	 * @return {*}  {FootballClub[]}
	 * @memberof FootballClubService
	 */
	getFootballClubList(): FootballClub[] {
		return FOOTBALLCLUBS;
	}

	/**
	 * Function to get a football club by his id
	 *
	 * @param {number} footballClubId
	 * @return {*}  {(FootballClub | undefined)}
	 * @memberof FootballClubService
	 */
	getFootballClubById(footballClubId: number): FootballClub | undefined {
		return FOOTBALLCLUBS.find(
			(footballClub) => footballClub.id == footballClubId
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
