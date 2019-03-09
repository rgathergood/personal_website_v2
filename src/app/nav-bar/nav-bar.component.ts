import { Component, OnInit } from '@angular/core';

interface NavBarItem {
  url: string;
  displayText: string;
  icon?: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
public navbarItems: NavBarItem[];
  constructor() { this.navbarItems = [
      { url: '#about', icon: 'face', displayText: 'about me'},
      { url: '#timeline', icon: 'timeline', displayText: 'timeline'},
      { url: '#projects', icon: 'code', displayText: 'projects'},
      { url: '#contact', icon: 'email', displayText: 'contact'},
    ];
  }

  public ngOnInit(): void {
  }

}
