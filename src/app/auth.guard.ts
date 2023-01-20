import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	canActivate() {
		console.log("Guard is activated");
		return true;
	}
}