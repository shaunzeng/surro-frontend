import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ISidebar {
  containerClassnames: string;
  menuClickCount: number;
  selectedMenuHasSubItems: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private initialSidebar: ISidebar = {
    containerClassnames: environment.defaultMenuType,
    menuClickCount: 0,
    selectedMenuHasSubItems: environment.defaultMenuType === 'menu-default',
  };
  private sidebar = new BehaviorSubject<ISidebar>(this.initialSidebar);
  subHiddenBreakpoint: number = environment.subHiddenBreakpoint;
  menuHiddenBreakpoint: number = environment.menuHiddenBreakpoint;

  constructor() {}
  getSidebar(): Observable<ISidebar> {
    return this.sidebar.asObservable();
  }
  changeVal(str: string): void {
    const before = this.sidebar.getValue();
    this.sidebar.next({ ...before, containerClassnames: str });
  }
  setContainerClassnames(
    clickIndex: number,
    strCurrentClasses: string,
    selectedMenuHasSubItems: boolean
  ): void {
    const currentClasses = strCurrentClasses
      ? strCurrentClasses.split(' ').filter((x) => x !== '')
      : '';
    let nextClasses = '';
    if (!selectedMenuHasSubItems) {
      if (
        currentClasses.includes('menu-default') &&
        (clickIndex % 4 === 0 || clickIndex % 4 === 3)
      ) {
        clickIndex = 1;
      }
      if (currentClasses.includes('menu-sub-hidden') && clickIndex % 4 === 2) {
        clickIndex = 0;
      }
      if (
        currentClasses.includes('menu-hidden') &&
        (clickIndex % 4 === 2 || clickIndex % 4 === 3)
      ) {
        clickIndex = 0;
      }
    }

    if (clickIndex % 4 === 0) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = 'menu-default menu-sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden';
      }
      clickIndex = 0;
    } else if (clickIndex % 4 === 1) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary';
      }
    } else if (clickIndex % 4 === 2) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = 'menu-default menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default main-hidden sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden sub-hidden';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
      }
    } else if (clickIndex % 4 === 3) {
      if (
        currentClasses.includes('menu-default') &&
        currentClasses.includes('menu-sub-hidden')
      ) {
        nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-default')) {
        nextClasses = 'menu-default sub-hidden';
      } else if (currentClasses.includes('menu-sub-hidden')) {
        nextClasses = 'menu-sub-hidden sub-show-temporary';
      } else if (currentClasses.includes('menu-hidden')) {
        nextClasses = 'menu-hidden main-show-temporary';
      }
    }
    if (currentClasses.includes('menu-mobile')) {
      nextClasses += ' menu-mobile';
    }
    this.sidebar.next({
      containerClassnames: nextClasses,
      menuClickCount: clickIndex,
      selectedMenuHasSubItems,
    });
  }

  addContainerClassname(classname: string, strCurrentClasses: string): void {
    const newClasses = !(strCurrentClasses.indexOf(classname) > -1)
      ? strCurrentClasses + ' ' + classname
      : strCurrentClasses;
    const before = this.sidebar.getValue();
    this.sidebar.next({ ...before, containerClassnames: newClasses });
  }

  changeDefaultClassnames(strCurrentClasses: string): void {
    const before = this.sidebar.getValue();
    this.sidebar.next({ ...before, containerClassnames: strCurrentClasses });
  }

  changeSelectedMenuHasSubItems(hasSubMenu: boolean = true): void {
    const before = this.sidebar.getValue();
    this.sidebar.next({ ...before, selectedMenuHasSubItems: hasSubMenu });
  }

  clickOnMobileMenu = (strCurrentClasses: string) => {
    const before = this.sidebar.getValue();
    const currentClasses = strCurrentClasses
      ? strCurrentClasses
          .split(' ')
          .filter((x) => x !== '' && x !== 'sub-show-temporary')
      : [];
    let nextClasses = '';
    if (currentClasses.includes('main-show-temporary')) {
      nextClasses = currentClasses
        .filter((x) => x !== 'main-show-temporary')
        .join(' ');
    } else {
      nextClasses = currentClasses.join(' ') + ' main-show-temporary';
    }
    this.sidebar.next({
      ...before,
      containerClassnames: nextClasses,
      menuClickCount: 0,
    });
  }
}
