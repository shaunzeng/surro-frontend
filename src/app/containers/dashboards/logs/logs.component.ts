import { Component} from '@angular/core';
import logItems, { ILog } from 'src/app/data/logs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html'
})
export class LogsComponent  {

  constructor() { }

  data: ILog[] = logItems;



}
