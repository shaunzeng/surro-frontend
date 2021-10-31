import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    constructor(private router: Router){};

    redirectTo(url: string) {
        this.router.navigate(['./redirect'], { queryParams : {to:url}});
    }

    toHome(){
        this.router.navigateByUrl('');
    }

    toSearchResults(search: string, zipcode: string){
        this.router.navigate(['/search'], { queryParams: { search, zipcode }});
    }
}