import { Component, OnInit } from '@angular/core';
import { CommunicationLayerService } from '../shared/communication-layer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  receivedData: any;

  constructor(private CommunicationLayerService: CommunicationLayerService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.CommunicationLayerService.data$.subscribe(data => {
      console.log(data);
    });
    this.route.paramMap.subscribe(params => {
      const data = params.get('data');
      console.log(data);
    });
  }
}
