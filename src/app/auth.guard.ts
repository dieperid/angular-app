import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	/**
	 * Function to check if the user is authenticated
	 *
	 * @return {*}  {boolean}
	 * @memberof AuthGuard
	 */
	canActivate(): boolean {
		if (this.authService.isLoggedIn) {
			return true;
		}
		this.router.navigate(["/login"]);
		return false;
	}
}
