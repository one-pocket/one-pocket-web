import { DOCUMENT, Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'op-theme';

/**
 * Light/dark override. The resolved theme is applied as
 * `<html data-theme="...">` — an inline script in index.html sets it before
 * first paint (system preference unless the user chose), so there is no flash.
 * This service reads that initial value and owns changes from the toggle.
 *
 * SSR renders nothing theme-specific: the toggle shows both icons and CSS picks
 * one by data-theme, so server and client HTML match and hydration is clean.
 */
@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly mode = signal<'light' | 'dark'>(this.initial());

  constructor() {
    effect(() => {
      const mode = this.mode();
      if (!this.isBrowser) return;
      this.doc.documentElement.dataset['theme'] = mode;
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works
        // for the session.
      }
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  private initial(): 'light' | 'dark' {
    if (!this.isBrowser) return 'light';
    return this.doc.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light';
  }
}
