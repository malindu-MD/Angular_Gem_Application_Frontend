import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";

export const routes: Routes = [

  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundPageComponent}



];
