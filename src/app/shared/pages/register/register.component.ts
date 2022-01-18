import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService, SearchService } from '@core';
import { HttpErrorResponse } from '@angular/common/http';
import { from, Observable, Observer, of, Subject } from 'rxjs';
import { catchError, debounce, debounceTime, filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnDestroy{
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  msg = '';
  modalRef: BsModalRef;

  unsubscribe$ = new Subject();
  zipcodeSubject = new Subject<string>();
  suggestedZips$ = new Observable((observer: Observer<string | undefined>) => {
    this.zipcodeSubject.next = (data) => observer.next(data);
  }).pipe(
    filter(query => !!query && query.length > 2 && query.length < 6),
    debounceTime(300),
    tap(console.log),
    switchMap(query => 
      from(this.searchService.searchZip(query))
        .pipe(
          map(data => {
            console.log('got data : ', data);
            return data['zips'] || null;
          }),
          catchError(e => {
            console.log('error : ', e);
            return of([])
          })
        )
    )
  )

  @ViewChild('msgTmp') msgTmp : TemplateRef<any>;

  constructor(private modalService: BsModalService,
              private authService: AuthService,
              private router: Router,
              private searchService: SearchService) { }

  onSubmit(): void {
    if (this.registerForm.value.password !== this.registerForm.value.passwordAgain) return ;

    if (this.registerForm.valid) {
      if (!this.buttonDisabled) {
        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';

        this.authService
        .register({
          email:this.registerForm.value.email,
          firstName:this.registerForm.value.firstName,
          lastName:this.registerForm.value.lastName,
          password:this.registerForm.value.password,
          zipcode:this.registerForm.value.zipcode
        })
        .then(this.successHandler.bind(this))
        .catch(this.errorHandler.bind(this))
      }
    }
  }

  onZipcodeChange(e: string){
    console.log(e, ' input');
    this.zipcodeSubject.next(e);
  }

  ngOnDestroy(){
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  private successHandler(data: any) {
    if (data['status'] === 'Success') {
      this.showMsg('Registered successfully');
      this.buttonState='';

      setTimeout(()=> {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }

  private errorHandler(err) {
    this.buttonState='';
    this.buttonDisabled = false;

    this.registerForm.resetForm();

    this.showMsg(err instanceof HttpErrorResponse ? err.error.message : err);
  }

  private showMsg(msg:string) {
    this.msg = msg;
    this.modalRef = this.modalService.show(this.msgTmp, {
      backdrop:false
    });

    setTimeout(()=>{
      this.modalRef.hide();
      this.msg = '';
    }, 2000);
  }
}
