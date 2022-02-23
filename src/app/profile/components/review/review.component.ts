import {
    Component, EventEmitter, Input, Output,
  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddReviewComponent } from '../add-review-prompt/add-review.component';

@Component({
  selector: 'app-profile-review',
  templateUrl: './review.component.html',
  styleUrls:['./review.component.scss']
})
export class ReviewComponent {

    bsModalRef?: BsModalRef;
    rate = 3;
    page = 1;

    data = [{
      id:"xhkasgidstayuxgsayufds",
      name:'Shaun Zeng',
      date:'11/11/2021',
      rate: 3,
      review: 'I have worked with this clinic, my overall experience was positive, they scheduled my transfer fairly quickly, there was not much wait time. All my medications were purchased after consulating with us.',
      likes: 3,
      likedByYou:true,
      image:'https://vien-angular.coloredstrategies.com/assets/img/profiles/l-4.jpg',
      album:[
        {
          src: '/assets/img/products/marble-cake.jpg',
          thumb: '/assets/img/products/marble-cake-thumb.jpg'
        },
        {
          src: '/assets/img/products/parkin.jpg',
          thumb: '/assets/img/products/parkin-thumb.jpg'
        },
        {
          src: '/assets/img/products/fruitcake.jpg',
          thumb: '/assets/img/products/fruitcake-thumb.jpg'
        }
      ]
    },
    {
      id:"xsafds4y54gt4g4",
      name:'Miguel Rivera',
      date:'11/12/2021',
      rate: 1,
      review: 'I no like them. They took my money did nothing',
      likes: 3,
      likedByYou:false,
      image:'https://vien-angular.coloredstrategies.com/assets/img/profiles/l-4.jpg',
      album:[
        {
          src: '/assets/img/products/marble-cake.jpg',
          thumb: '/assets/img/products/marble-cake-thumb.jpg'
        },
        {
          src: '/assets/img/products/parkin.jpg',
          thumb: '/assets/img/products/parkin-thumb.jpg'
        },
        {
          src: '/assets/img/products/fruitcake.jpg',
          thumb: '/assets/img/products/fruitcake-thumb.jpg'
        }
      ]
    }]

    @Output() onReviewSubmission: EventEmitter<{rating: number, review: string}> = new EventEmitter();
    @Output() onLikeComment: EventEmitter<string> = new EventEmitter();
    @Output() onRemoveComment: EventEmitter<string> = new EventEmitter();
    @Output() onReportComment: EventEmitter<string> = new EventEmitter();
    @Output() onUnlikeComment: EventEmitter<string> = new EventEmitter();
    @Output() onPageChanged: EventEmitter<number> = new EventEmitter();

    constructor( 
      private modalService: BsModalService) {}

    onOpenWriteReview(){
        this.bsModalRef = this.modalService.show(AddReviewComponent, { class: 'gray modal-lg' });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.comp = this;
    }

    onSubmitReview(data: {rating: number, review: string}) {
      this.onReviewSubmission.emit(data);
    }

    likeComment(obj: any){
      obj.likedByYou = true;
      obj.likes += 1;
      this.onLikeComment.emit(obj.id);
    }

    unlikeComment(obj: any){
      obj.likedByYou = false;
      obj.likes -= 1;
      this.onUnlikeComment.emit(obj.id);
    }

    removeComment(id: string){
      this.onRemoveComment.emit(id);
    }

    reportComment(id: string) {
      this.onReportComment.emit(id);
    }

    onPageChange(e: any) {
      this.onPageChanged.emit(e.page);
    }
}