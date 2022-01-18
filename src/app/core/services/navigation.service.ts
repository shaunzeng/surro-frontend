import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPageParams } from './api.models';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    constructor(private router: Router){};

    redirectTo(url: string) {
        this.router.navigate(['./redirect'], { queryParams : {to:url}});
    }

    toHome(){
        this.router.navigateByUrl('');
    }

    toSearchResults(params: SearchPageParams){
        this.router.navigate(['/search'], { queryParams: params });
    }
}