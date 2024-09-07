import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommunicationLayerService } from '../shared/communication-layer.service';

@Injectable({
  providedIn: 'root'
})
export class LazyGuard implements CanActivate {
  constructor(private CommunicationLayerService: CommunicationLayerService, private router: Router) { }

  canActivate(): boolean {
    const data = this.CommunicationLayerService.data$.subscribe((response)=>{
      console.log(response);
    })
    if (data) {
      // Perform your logic based on the data
      return true;
    } else {
      // Redirect or handle unauthorized access
      this.router.navigate(['/']);
      return false;
    }
  }
}
