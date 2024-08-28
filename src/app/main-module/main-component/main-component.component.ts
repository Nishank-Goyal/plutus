import { Component } from '@angular/core';
import { CommonService } from 'src/services/commonService';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {
  constructor(private commonService:CommonService, private socketService:SocketService){
    this.commonService.getUserProfile()
    this.socketService.connect();
  }
}
