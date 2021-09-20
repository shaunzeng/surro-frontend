import { Component, TemplateRef,  ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-new-survey-modal',
  templateUrl: './add-new-survey-modal.component.html',
  styles: []
})
export class AddNewSurveyModalComponent  {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  categories = [
    { label: 'Cakes', value: 'chocolate' },
    { label: 'Cupcakes', value: 'vanilla' },
    { label: 'Desserts', value: 'strawberry' }
  ];
  labels = [
    { label: 'EDUCATION', value: 'education' },
    { label: 'NEW FRAMEWORK', value: 'new-framework' },
    { label: 'PERSONAL', value: 'personal' }
  ];

  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService) { }


  show(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
