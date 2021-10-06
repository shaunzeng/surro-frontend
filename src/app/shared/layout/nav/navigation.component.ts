import { Component, OnInit, OnDestroy, HostListener, ViewChild, TemplateRef } from '@angular/core';
import { LangService, Language, AuthService } from '@core';
import { environment } from '@env';
import { getThemeColor } from 'src/app/utils/util';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from '../../pages/data/selectors';
import { logout } from '../../pages/data/actions';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-topnav',
  templateUrl: './navigation.component.html',
  styleUrls:['./navigation.component.scss']
})
export class TopnavComponent implements OnInit, OnDestroy {

  adminRoot = environment.adminRoot;
  displayName = 'Shaun';
  languages: Language[];
  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = '';
  currentUrl = '/';

  isLoggedIn$: Observable<boolean>;
  name$: Observable<string>;
  

  modalRef: BsModalRef;

  @ViewChild('msgTemp')
  private msgTemp: TemplateRef<any>;

  msg = '';


  constructor(
    public authService: AuthService,
    private langService: LangService,
    private router: Router,
    private store: Store,
    private modalService: BsModalService, 
  ) {
    this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.langService.languageShorthand;
    this.isSingleLang = this.langService.isSingleLang;
    this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
    this.currentUrl = this.router.url;
  }


  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectors.selectIsLoggedIn);
    this.name$ = this.store.select(selectors.selectName);
    
  }
  
  ngOnDestroy(): void {

  }


  fullScreenClick(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreen(event): void {
    if (document.fullscreenElement) {
      this.isFullScreen = true;
    } else {
      this.isFullScreen = false;
    }
  }

  onLanguageChange(lang): void {
    this.langService.language = lang.code;
    this.currentLanguage = this.langService.languageShorthand;
  }


  onSignOut(): void {
    this.authService
    .signOut()
    .then(this.logoutSuccess.bind(this))
    .catch(this.showMsg.bind(this))
  }

  private logoutSuccess() {
    this.store.dispatch(logout());
    this.showMsg('Logged out');

    setTimeout(()=>{
      this.router.navigate(['/']);
    }, 1000);
  }

  private showMsg(msg:string) {
    this.msg = msg;
    this.modalRef = this.modalService.show(this.msgTemp, {
      backdrop:false,
    });

    setTimeout(() => {
      this.modalRef.hide();
      this.msg = '';
    }, 2000)
  }

  searchKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search();
    } else if (event.key === 'Escape') {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) {
        input.classList.remove('mobile-view');
      }
      this.searchKey = '';
    }
  }

  searchAreaClick(event): void {
    event.stopPropagation();
  }

  searchClick(event): void {
    if (window.innerWidth < environment.menuHiddenBreakpoint) {
      let elem = event.target;
      if (!event.target.classList.contains('search')) {
        if (event.target.parentElement.classList.contains('search')) {
          elem = event.target.parentElement;
        } else if (
          event.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = event.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search();
        elem.classList.remove('mobile-view');
      } else {
        elem.classList.add('mobile-view');
      }
    } else {
      this.search();
    }
    event.stopPropagation();
  }

  search(): void {
      /*
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate([this.adminRoot + '/pages/miscellaneous/search'], {
        queryParams: { key: this.searchKey.toLowerCase().trim() },
      });
      this.searchKey = '';
    }*/
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event): void {
    const input = document.querySelector('.mobile-view');
    if (input && input.classList) {
      input.classList.remove('mobile-view');
    }
    this.searchKey = '';
  }
}
