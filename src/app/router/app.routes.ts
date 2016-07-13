import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "../layout/home/home.component";
import { IdeasComponent } from "../layout/ideas/ideas.component";
import { MarketplaceComponent } from "../layout/marketplace/marketplace.component";
import { ProfileComponent } from "../layout/profile/profile.component";
import { ProjectsComponent } from "../layout/projects/projects.component";

export const routes: RouterConfig = [
    {path: '',            component: HomeComponent},
    {path: 'ideas',       component: IdeasComponent},
    {path: 'marketplace', component: MarketplaceComponent},
    {path: 'profile',     component: ProfileComponent},
    {path: 'projects',    component: ProjectsComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
