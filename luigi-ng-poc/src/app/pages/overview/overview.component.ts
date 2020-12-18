import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../service/shared-data.service';
declare var loadLuigiAfter: any;
declare var LuigiClient: any;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private sharedDataService : SharedDataService) { }

  ngOnInit(): void {
  }

  clicked = () => {
    //console.log('button clicked !');
    //this.sharedDataService.changeMessage('button-clicked');
    LuigiClient.sendCustomMessage({id: 'overview'});
    //loadLuigiAfter();
  }
}
