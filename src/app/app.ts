import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SUPPORT_EMAIL } from './services/seo';
import { Theme } from './services/theme';

// The whole chrome lives here: three routes don't need header/footer
// components. Pages render into the outlet between them.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly theme = inject(Theme);
  protected readonly supportEmail = SUPPORT_EMAIL;
  protected readonly year = new Date().getFullYear();
}
