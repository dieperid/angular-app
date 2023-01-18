export class FootballClub {
	name: string;
	picture: string;
	players: string[];
	leagues: string[];
	created: Date;

	constructor(
		name: string = "Enter a name",
		picture: string = "",
		players: string[] = [""],
		leagues: string[] = [""],
		created: Date = new Date()
	) {
		this.name = name;
		this.picture = picture;
		this.players = players;
		this.leagues = leagues;
		this.created = created;
	}
}
