import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "footballClubLeagueColor",
})
export class FootballClubLeagueColorPipe implements PipeTransform {
	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
