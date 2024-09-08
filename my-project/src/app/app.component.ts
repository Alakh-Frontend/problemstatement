import { Component,OnInit } from '@angular/core';
import { CommunicationLayerService } from './shared/communication-layer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor( private CommunicationLayerService: CommunicationLayerService, private router: Router ) { }

  ngOnInit() {
    console.log('Field is updated!');
    // this.router.navigate(['/lazy', { data: 'someValue' }]);
    this.CommunicationLayerService.sendData("Some value from the main component");
  }

  redirectToLazy(){
    this.router.navigate(['/lazy', { data: 'someValue' }]);
  }
}

