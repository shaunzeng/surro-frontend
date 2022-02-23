import {
    Component,
    Input,
    OnInit,
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChartService } from '@shared';
import { Observable } from 'rxjs';
import {
  conversionChartData
} from '../../../data/charts';
import { fetchProfile, submitReview } from '../../data/actions';
import { selectIsBusy, selectProfile } from '../../data/selectors';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.container.html',
  styleUrls:['./clinic.container.scss']
})
export class ProfileClinicContainer implements OnInit {

    control = true;

    chartDataConfig: ChartService;
    conversionChartData = conversionChartData;
    
    rate = 4;
    album = [];
    profileId: string;

    isBusy$: Observable<boolean>;
    profile$: Observable<any>;

    constructor(
        private store: Store,
        private chartService: ChartService,
        private route: ActivatedRoute,
    ) {
      this.chartDataConfig = this.chartService;
    }
  
    ngOnInit(): void {
      const { id } = this.route.snapshot.params;
      this.profileId = id;

      this.isBusy$ = this.store.select(selectIsBusy);
      this.profile$ = this.store.select(selectProfile);
      this.store.dispatch(fetchProfile({ id }));
    }

    onSubmitReview(e: {rating: number, review: string}) {
      this.store.dispatch(submitReview(e));
    }

    onSubmitMessage(e: {name: string, email: string, concerns: string[], message: string}) {
      console.log('requested conversation : ', e);
    }

    onSendHelp(e: any){
      console.log('sent help');
    }
}