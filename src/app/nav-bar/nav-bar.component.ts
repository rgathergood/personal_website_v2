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
      { url: '#about', icon: 'favorite', displayText: 'about me'},
      { url: '#projects', displayText: 'projects'},
      { url: '#contact', displayText: 'contact'},
    ];
  }

  public ngOnInit(): void {
  }

}
