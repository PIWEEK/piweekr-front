import {Injectable} from '@angular/core';
import {AuthApiService} from './api/auth.api.service';
import {UserApiService} from './api/users.api.service';
import {IdeaApiService} from './api/ideas.api.service';
import {ProjectApiService} from './api/projects.api.service';
import {EditionApiService} from './api/editions.api.service';
import {CommentsApiService} from './api/comments.api.service';

@Injectable()
export class ApiService {
    constructor(
        public auth: AuthApiService,
        public users: UserApiService,
        public ideas: IdeaApiService,
        public projects: ProjectApiService,
        public editions: EditionApiService,
        public comments: CommentsApiService
    ) {}
}

export const API_PROVIDERS = [
    ApiService,
    AuthApiService,
    UserApiService,
    IdeaApiService,
    ProjectApiService,
    EditionApiService,
    CommentsApiService
];
