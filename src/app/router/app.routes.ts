import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "../layout/home/home.component";
import { LoginComponent } from "../layout/login/login.component";
import { IdeasComponent } from "../layout/ideas/ideas.component";
import { MarketplaceComponent } from "../layout/marketplace/marketplace.component";
import { ProfileComponent } from "../layout/profile/profile.component";

export const routes: RouterConfig = [
    {path: '',            component: HomeComponent},
    {path: 'login',       component: LoginComponent},
    {path: 'ideas',       component: IdeasComponent},
    {path: 'marketplace', component: MarketplaceComponent},
    {path: 'profile',     component: ProfileComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
