import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailFootballClubComponent } from "./detail-football-club/detail-football-club.component";
import { ListFootballClubComponent } from "./list-football-club/list-football-club.component";

const routes: Routes = [
	{ path: "football-clubs", component: ListFootballClubComponent },
	{ path: "football-clubs/:id", component: DetailFootballClubComponent },
	{ path: "", redirectTo: "football-clubs", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
