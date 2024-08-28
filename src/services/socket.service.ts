import { CONSTANTS } from "src/constants";
import { io, Socket } from 'socket.io-client';
import { Injectable } from "@angular/core";
import { CommonService } from "./commonService";

@Injectable({ providedIn: 'root' })
export class SocketService {
    socket: Socket | undefined;
    constructor(private commonService:CommonService) { }
    connect() {
        if(!this.socket){
            let token = localStorage.getItem('token');
            this.socket = io(CONSTANTS.environment.baseUlr + `/?token=${token}`, {
                reconnection: true,
                reconnectionDelay: 500,
                transports: ['websocket'],
            });


            this.socket.on(CONSTANTS.SOCKET_EVENTS.NEW_MESSAGE,(data)=>{
                console.log('New Message --------->>',data);
                this.commonService.setChange({message:data,newMessage:true})
            })
        }

    }

    emitSocket(eventName:string,data:any){
        this.socket && this.socket.emit(eventName,data);
    }

}