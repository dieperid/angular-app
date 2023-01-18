export class FootballClub {
	id: number;
	name: string;
	picture: string;
	players: string[];
	leagues: string[];
	created: Date;

	constructor(
		name: string = "Enter a name",
		picture: string = "Enter a link (https://xxxxx)",
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
