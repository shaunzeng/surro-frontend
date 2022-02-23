import {
    Component,
    ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls:['./add-review.component.scss']
})
export class AddReviewComponent {

    config: DropzoneConfigInterface = {
      url: 'https://surroch.com/post',
      thumbnailWidth: 160,
      // tslint:disable-next-line: max-line-length
      previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>',
      maxFiles: 4,
      maxFilesize: 2400,
    };

    @ViewChild('reviewForm') reviewForm: NgForm;

    constructor(public bsModalRef: BsModalRef) {}

    onSubmit(){
      if(this.reviewForm.valid) {
        this.bsModalRef.content.comp.onSubmitReview(this.reviewForm.value);
        this.bsModalRef.hide();
      }
    }
}