import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  name: String = "Cort Reynolds-Bolan";
  today: Date;
  constructor() {
    this.today = new Date();
  }
}
