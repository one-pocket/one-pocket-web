import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  private readonly viewportScroller = inject(ViewportScroller);
  protected readonly year = new Date().getFullYear();

  protected scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
