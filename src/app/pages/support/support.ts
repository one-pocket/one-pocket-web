import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-support',
  imports: [RouterLink],
  templateUrl: './support.html',
})
export class Support {
  constructor() {
    inject(Seo).update({
      title: 'Support | One Pocket',
      description:
        'Get help with One Pocket: contact support, report a bug, or ask about purchases. Email capydev.sys@outlook.com and we will get back to you.',
      path: 'support',
    });
  }
}
