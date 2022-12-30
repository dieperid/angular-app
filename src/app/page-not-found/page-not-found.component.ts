import { Component } from "@angular/core";

@Component({
	selector: "app-page-not-found",
	template: `
		<div class="center">
			<h1>Hey, this page doesn't exist !</h1>
			<a
				routerLink="/football-clubs"
				class="waves-effect waves-teal btn-flat"
			>
				Get back to the home page
			</a>
			<br />
			<img
				src="https://cdn.vox-cdn.com/thumbor/t9vGkAEi0G8ud04IWKWgLM2pcrg=/0x0:3000x1987/1200x800/filters:focal(1668x259:2148x739)/cdn.vox-cdn.com/uploads/chorus_image/image/61905033/1052597872.jpg.0.jpg"
			/>
		</div>
	`,
	styles: [],
})
export class PageNotFoundComponent {}
