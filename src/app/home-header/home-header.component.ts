import { Token } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

  navs = [
    {
      name:'Home',
      tag:'#hero'
    },
    {
      name:'About',
      tag:'#about'
    },
    {
      name:'FAQ',
      tag:'#faq'
    },
    {
      name:'Contact Us',
      tag:'#contact'
    }

  ]
  navigate: string = '#hero';
  userLogin = false;


  constructor(){
    let token = localStorage.getItem('token');
    
    if(token){
      this.userLogin = true;
    }else{
      this.userLogin = false;
    }
  }
  onNavigate(navigateTo:string){
    this.navigate = navigateTo;
  }

}
