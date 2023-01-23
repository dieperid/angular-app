import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	isLoggedIn: boolean = false;
	redirectUrl: string;

	/**
	 * Function lo check the login information of the user
	 *
	 * @param {string} username
	 * @param {string} password
	 * @return {*}  {Observable<boolean>}
	 * @memberof AuthService
	 */
	login(username: string, password: string): Observable<boolean> {
		const isLoggedIn = username == "root" && password == "root";

		return of(isLoggedIn).pipe(
			delay(1000),
			tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
		);
	}

	/**
	 * Function to logout the user
	 *
	 * @memberof AuthService
	 */
	logout() {
		this.isLoggedIn = false;
	}
}
