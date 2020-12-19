import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SharedDataService} from '../../service/shared-data.service';

declare var Luigi: any;
declare var loadLuigi: any;
declare var loadLuigiAfter: any;

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    loadLuigi();
    this.subscription
      = this.sharedDataService.currentMessage.subscribe(message => {
      console.log(message);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
