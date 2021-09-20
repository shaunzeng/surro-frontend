import { Component, OnInit } from '@angular/core';
import { SelectDataService, Person } from './select.data.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { concat, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})

export class SelectComponent implements OnInit {
  people: Person[];
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  selectedPeople = [{ name: 'Karyn Wright' }];

  selectedCompanies;
  companies: any[] = [];
  companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

  peopleAsync: Observable<Person[]>;
  selectedPersonIdAsync = '5a15b13c605403381eec5019';

  githubUsers$: Observable<any[]>;
  selectedUsers = [];

  peopleLoading = false;

  peopleAsyncSearch: Observable<Person[]>;
  peopleLoadingAsyncSearch = false;
  peopleInputAsyncSearch = new Subject<string>();
  selectedPersonsAsyncSearch = [{ name: 'Karyn Wright' }, { name: 'Other' }];

  constructor(private selectDataService: SelectDataService) {
    this.people = selectDataService.people;
  }

  trackByFn(item: Person): string {
    return item.id;
  }

  ngOnInit(): void {
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });

    this.peopleAsync = this.selectDataService.getPeople();
    this.githubUsers$ = this.selectDataService.getGithubAccounts('anjm');

    this.peopleLoading = true;
    this.selectDataService.getPeople().subscribe(x => {
      this.people = x;
      this.peopleLoading = false;
    });

    this.peopleAsyncSearch = concat(
      of([]), // default items
      this.peopleInputAsyncSearch.pipe(
        distinctUntilChanged(),
        tap(() => this.peopleLoadingAsyncSearch = true),
        switchMap(term => this.selectDataService.getPeople(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.peopleLoadingAsyncSearch = false)
        ))
      )
    );
  }

  addTagFn(addedName): { name: any; tag: true } {
    return { name: addedName, tag: true };
  }
}
