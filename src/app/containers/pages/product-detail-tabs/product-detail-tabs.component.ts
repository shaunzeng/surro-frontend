import { Component, OnInit } from '@angular/core';
import commentData, { IComment } from 'src/app/data/comments';
import questionData, { IQuestion } from 'src/app/data/questions';

@Component({
  selector: 'app-product-detail-tabs',
  templateUrl: './product-detail-tabs.component.html'
})
export class ProductDetailTabsComponent implements OnInit {
  comments: IComment[] = commentData;
  questions: IQuestion[] = questionData;

  constructor() { }

  ngOnInit(): void {
  }

}
