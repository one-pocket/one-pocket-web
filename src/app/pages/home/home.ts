import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    inject(Seo).update({
      title: 'One Pocket | One goal at a time',
      description:
        'One Pocket is a tiny budget app for one purpose at a time — a trip, a gift, a project. Set an amount, log what you spend, and watch one number. Private and on-device.',
      path: '',
    });
  }
}
