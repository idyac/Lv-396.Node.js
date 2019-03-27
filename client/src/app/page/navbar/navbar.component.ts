import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuBurger:any;
  @Input() menuRight:any;
  name: string = "Name";
  surname: string = "Surname";
  avatar: string = "assets/img/navbar-symbol-desk.png";
  constructor() { }

  ngOnInit() {
  }
  changeCurrent(index, links) {
    event.preventDefault();
    links.forEach(item => {
      item.isCurrent = false
    })
    links[index].isCurrent = true;
    if(links[index].title === "Log Out") {
      links[index].isCurrent = false
    }
  }
}
