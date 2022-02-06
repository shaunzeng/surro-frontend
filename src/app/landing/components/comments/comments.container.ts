import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
    ViewChild,
    AfterViewInit,
    ElementRef,
    Input,
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
    @Input() data = [];

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
        }, 1000);
        
    }

}