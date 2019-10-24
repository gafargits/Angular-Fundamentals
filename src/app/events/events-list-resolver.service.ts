import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventServiceService } from './shared/event-service.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventServiceService) { }

  resolve(){
    return this.eventService.getEvents().pipe(
      map(events => events)
    )
  }
}
