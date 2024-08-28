import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS } from 'src/constants';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  chatId:string | undefined;
  chatForm:FormGroup;
  reciverId:string | undefined;
  messages:Array<any> = []
  constructor(private fb:FormBuilder,public commonService:CommonService,private route:ActivatedRoute,private socketService:SocketService,private mainService:MainService){
    this.route.params.subscribe((res:any)=>{
      this.chatId =res.chatId;
      this.reciverId = res.reciverId
      console.log(this.reciverId);
      this.getMessageList()
      this.socketService.emitSocket(CONSTANTS.SOCKET_EVENTS.JOIN_RROM,{room:this.chatId});
    })

    this.commonService.getChange().subscribe((res:any)=>{
      if(res.newMessage){
        console.log(res);
        this.messages.push(res.message)
      }
    })
    this.chatForm = this.fb.group({
      chatId:['',Validators.required],
      message:['',Validators.required],
      senderId:['',Validators.required]
    })
  }

  submit(){
    this.chatForm.controls['chatId'].patchValue(this.chatId);
    this.chatForm.controls['senderId'].patchValue(this.commonService.userData._id)
    if(this.chatForm.valid){
      this.socketService.emitSocket(CONSTANTS.SOCKET_EVENTS.SEND_MESSAGE,{...this.chatForm.value,reciverId:this.reciverId})
      this.chatForm.reset();
    }else{
      Object.keys(this.chatForm.controls).forEach(key=>this.chatForm.controls[key].markAsTouched({onlySelf:true}));
    }
  }

 async  getMessageList(){
   let response:any = await this.mainService.getMessageList({chatId:this.chatId}).toPromise();
   console.log(response.data.records);
   this.messages = response.data.records;
   this.messages.reverse();
  }

}
