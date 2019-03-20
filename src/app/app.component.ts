import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { routerAnimation } from './animations/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  title = 'Rob Gathergood';

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'firstPage';
  }
}
