import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { FOOTBALLCLUBS } from "./football-club/mock-football-club";

@Injectable({
	providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		const footballClubs = FOOTBALLCLUBS;
		return { footballClubs };
	}
}
