import {
    Component, EventEmitter, Input, Output,
  } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { AddReviewComponent } from '../add-review-prompt/add-review.component';

@Component({
  selector: 'app-profile-review',
  templateUrl: './review.component.html',
  styleUrls:['./review.component.scss']
})
export class ReviewComponent {

    bsModalRef?: BsModalRef;
    rate = 3;

    @Output() onReviewSubmission: EventEmitter<any> = new EventEmitter();

    constructor( private modalService: BsModalService) {}

    onOpenWriteReview(){
        this.bsModalRef = this.modalService.show(AddReviewComponent, { class: 'gray modal-lg' });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.comp = this;
    }

    onSubmitReview(data: {rating: number, review: string}) {
      this.onReviewSubmission.emit(data);
    }
}