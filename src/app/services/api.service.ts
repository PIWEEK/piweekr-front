import {Injectable} from '@angular/core';
import {AuthApiService} from './auth.api.service';
import {UserApiService} from './users.api.service';
import {IdeaApiService} from './ideas.api.service';
import {ProjectApiService} from './projects.api.service';
import {EditionApiService} from './editions.api.service';

@Injectable()
export class ApiService {
    constructor(
        public auth: AuthApiService,
        public users: UserApiService,
        public ideas: IdeaApiService,
        public projects: ProjectApiService,
        public editions: EditionApiService
    ) {}
}

export const API_PROVIDERS = [
    ApiService,
    AuthApiService,
    UserApiService,
    IdeaApiService,
    ProjectApiService,
    EditionApiService
];
