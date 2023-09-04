import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  activeComponent: 'login' | 'register' = 'login'; // Initially set to 'login'

  setActiveComponent(component: 'login' | 'register') {
    this.activeComponent = component;
  }
}
