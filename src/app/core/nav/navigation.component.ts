import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { LangService, Language } from '../services/lang.service';
import { environment } from '@env';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './navigation.component.html',
  styleUrls:['./navigation.component.scss']
})
export class TopnavComponent implements OnInit, OnDestroy {
  buyUrl = environment.buyUrl;
  adminRoot = environment.adminRoot;
  displayName = 'Shaun';
  languages: Language[];
  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = '';

  constructor(
    public authService: AuthService,
    private langService: LangService
  ) {
    this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.langService.languageShorthand;
    this.isSingleLang = this.langService.isSingleLang;
    this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
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

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

  onSignOut(): void {
    this.authService.signOut();
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
