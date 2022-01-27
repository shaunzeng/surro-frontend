import { HttpParams } from "@angular/common/http";
import { ApiModels } from "./api.models";

export class ApiUrlService {
    private baseHref: string;

    getFullUrl(url: string): string {
        return this.getBaseHref() + url.replace(/^\//, '');
    }

    getBaseHref(): string {
        if (!this.baseHref){
            const base: HTMLBaseElement = document.querySelector('base');
            this.baseHref = base ? base.getAttribute('href') : '/';
        }
        return this.baseHref;
    }

    fullPath(path: string): string{
        return this.getBaseHref() + 'api' + path;
    }

    applyParams(path: string, params: {[key: string]: any}): string {
        Object.keys(params).forEach(key => {
            const val = params[key];
            if (val === null || val === void 0) throw new Error(`${key} is required, but was null or undefined when calling ${path}`);
            path = path.replace(`{${key}}`, encodeURIComponent(val));
        });
        
        return this.fullPath(path);
    }

    getHttpParams(request: ApiModels ): HttpParams {

        let httpParams = new HttpParams();
    
        Object.keys(request).forEach( k => {
          if (!!request[k]) {
            httpParams = httpParams.set(k, request[k]);
          }
        });
    
        return httpParams;
    }

}