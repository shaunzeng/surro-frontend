import { HttpClient } from '@angular/common/http';


export abstract class BaseApiService {

    constructor(
        protected http: HttpClient,
       // protected apiUrlService: ApiUrlService,
       // private impersonationService: ImpersonationService
        ) {}
}