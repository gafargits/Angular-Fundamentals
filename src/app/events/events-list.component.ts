import { Component, OnInit } from '@angular/core';
import { EventServiceService} from './shared/event-service.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event-model';
 

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[]
  
  constructor(private eventService: EventServiceService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { 
    
  }
  ngOnInit() {
    this.events =  this.route.snapshot.data['events'] 
    // this.eventService.getEvents().subscribe(events => {this.events = events})
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

}
