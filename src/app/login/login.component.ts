import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styles: [],
})
export class LoginComponent implements OnInit {
	message: string = "You are disconnected";
	username: string;
	password: string;
	auth: AuthService;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.auth = this.authService;
	}

	/**
	 * Function to set a message for the user
	 *
	 * @memberof LoginComponent
	 */
	setMessage() {
		if (this.authService.isLoggedIn) {
			this.message = "You are connected";
		} else {
			this.message = "Username or password is incorrect";
		}
	}

	/**
	 * Function to login the user
	 *
	 * @memberof LoginComponent
	 */
	login() {
		this.message = "Connection attempt in progress";
		this.authService
			.login(this.username, this.password)
			.subscribe((isLoggedIn: boolean) => {
				this.setMessage();
				if (isLoggedIn) {
					this.router.navigate(["/football-clubs"]);
				} else {
					this.password = "";
					this.router.navigate(["/login"]);
				}
			});
	}

	/**
	 * Function to logout the user
	 *
	 * @memberof LoginComponent
	 */
	logout() {
		this.authService.logout();
		this.message = "You are disconnected";
	}
}
