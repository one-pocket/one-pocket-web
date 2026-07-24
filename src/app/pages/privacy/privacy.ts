import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
})
export class Privacy {
  constructor() {
    inject(Seo).update({
      title: 'Privacy Policy | One Pocket',
      description:
        'One Pocket stores your budgets on your device. No accounts, no analytics, no tracking. This policy explains what the app stores and how it is used.',
      path: 'privacy',
    });
  }
}
