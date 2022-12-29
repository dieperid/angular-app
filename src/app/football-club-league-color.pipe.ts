import { Pipe, PipeTransform } from "@angular/core";
/**
 * Display the color of the football club league
 * Take the league in argument
 *
 * @export
 * @class FootballClubLeagueColorPipe
 * @implements {PipeTransform}
 */
@Pipe({
	name: "footballClubLeagueColor",
})
export class FootballClubLeagueColorPipe implements PipeTransform {
	transform(league: string): string {
		let color: string;

		switch (league) {
			case "LaLiga":
				color = "red lighten-1";
				break;
			case "Ligue 1":
				color = "blue lighten-1";
				break;
			case "PL":
				color = "green lighten-1";
				break;
			case "Bundesliga":
				color = "brown lighten-1";
				break;
			case "Serie A":
				color = "grey lighten-3";
				break;
			default:
				color = "grey";
				break;
		}
		// chip is a materialize class to display a oval around the league
		return "chip " + color;
	}
}
