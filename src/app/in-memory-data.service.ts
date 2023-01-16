import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { FOOTBALLCLUBS } from "./football-club/mock-football-club";

@Injectable({
	providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		return FOOTBALLCLUBS;
	}
}
