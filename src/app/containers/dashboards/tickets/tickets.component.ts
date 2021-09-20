import { Component } from '@angular/core';
import ticketItems, { ITicket } from 'src/app/data/tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {

  constructor() { }

  data: ITicket[] = ticketItems;




}
