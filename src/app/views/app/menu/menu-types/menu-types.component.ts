import { Component, OnInit } from '@angular/core';
import { SidebarService, ISidebar } from 'src/app/containers/layout/sidebar/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html'
})
export class MenuTypesComponent implements OnInit {
  sidebar: ISidebar;
  subscription: Subscription;

  constructor( private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  changeDefaultMenuType(containerClassnames): void {
    const nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.sidebarService.setContainerClassnames(0, nextClasses.join(' '),
    this.sidebar.selectedMenuHasSubItems);
}

getMenuClassesForResize(classes): any {
    let nextClasses = classes.split(' ').filter(x => x !== '');
    const windowWidth = window.innerWidth;

    if (windowWidth < this.sidebarService.menuHiddenBreakpoint) {
        nextClasses.push('menu-mobile');
    } else if (windowWidth < this.sidebarService.subHiddenBreakpoint) {
        nextClasses = nextClasses.filter(x => x !== 'menu-mobile');
        if (
            nextClasses.includes('menu-default') &&
            !nextClasses.includes('menu-sub-hidden')
        ) {
            nextClasses.push('menu-sub-hidden');
        }
    } else {
        nextClasses = nextClasses.filter(x => x !== 'menu-mobile');
        if (
            nextClasses.includes('menu-default') &&
            nextClasses.includes('menu-sub-hidden')
        ) {
            nextClasses = nextClasses.filter(x => x !== 'menu-sub-hidden');
        }
    }
    return nextClasses;
}

}
