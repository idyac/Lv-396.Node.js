import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuBurger: [];
  @Input() menuRight: [];
  constructor() { }

  ngOnInit() {
  }

  changeCurrent(index, links) {
    event.preventDefault();
    links.forEach(item => {
      item.isCurrent = false;
    });
    links[index].isCurrent = true;

  }
}
