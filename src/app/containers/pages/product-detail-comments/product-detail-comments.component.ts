import { Component, OnInit } from '@angular/core';
import commentData, { IComment } from 'src/app/data/comments';


@Component({
  selector: 'app-product-detail-comments',
  templateUrl: './product-detail-comments.component.html'
})
export class ProductDetailCommentsComponent implements OnInit {

  constructor() { }
  comments: IComment[] = commentData;

  ngOnInit(): void {
  }

}
