import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.scss']
})
export class NavbarProfileComponent implements OnInit {
  @Input() menuRight: any;
  avatar: string = 'assets/img/navbar-symbol-mob.png';
  name: string = 'Name';
  surname: string = 'Surname';
  notificationsNumber: number = 7;
  isHR: boolean;

  constructor() { }

  ngOnInit() {
    this.isHR = true;
  }

  changeCurrent() {
    event.preventDefault();
    // links.forEach(item => {
    //   item.isCurrent = false;
    // });
    // if (index !== 0) {
    //   links[index].isCurrent = true;
    // }
    let current = document.getElementsByClassName('current');
    for(let i=0; i < current.length; i++) {
      current[i].classList.remove('current');
    }
  // }
  // toggleClass(event: any, class: string) {
  //   event.preventDefault()
  //   const hasClass = event.target.classList.contains(class)
  
  //   if(hasClass) {
  //     this.renderer.removeClass(event.target, class)
  //   } else {
  //     this.renderer.addClass(event.target, class)
  //   }
  }
}
