import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
    ViewChild,
    AfterViewInit,
    ElementRef,
  } from '@angular/core';
import { SearchService } from '@core';
import { Store } from '@ngrx/store';
import { blogData } from '../../../data/blog';

declare let waterfall: any;
@Component({
selector: 'app-home-comments',
templateUrl: './comments.container.html',
styleUrls:['./comments.container.scss']
})
export class CommentsContainer implements OnInit, OnDestroy, AfterViewInit {
data = blogData.slice();

@ViewChild('myWaterfall') myWaterfall: ElementRef;

constructor(
    public searchService:SearchService,
    private store: Store
) {}

ngOnInit(): void {
    
}

ngOnDestroy(): void {

}

ngAfterViewInit(){
    setTimeout(() => {
        waterfall(this.myWaterfall.nativeElement);  
    }, 100);
      
}

@HostListener('window:resize', ['$event'])
onResize(event): void {

}

@HostListener('window:click', ['$event'])
onClick(event): void {

}

@HostListener('window:scroll', ['$event'])
onScroll(event): void {

}
}