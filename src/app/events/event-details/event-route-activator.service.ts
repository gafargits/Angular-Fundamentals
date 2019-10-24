import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { EventServiceService } from 'src/app/events/shared/event-service.service';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: "root"
})
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventServiceService,
              private router: Router){}

  
  // canActivate(route:ActivatedRouteSnapshot){
  //   const eventExists = !!this.eventService.getEvent(route.params['id'])
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +next.url[1].path;
      if(isNaN(id) || id < 1){
        alert("Invalid event id");
        this.router.navigate(['/404'])
        return false;
      }
      return true;
  }

  // if(!eventExists){
  //   this.router.navigate(['/404'])
  //   return eventExists
  // }
}