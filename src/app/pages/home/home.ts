import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
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
      title: 'One Pocket | Simple budgets for a paycheck, a period, or a purpose',
      description:
        'A lightweight budget tracker for a paycheck, a period, or a purpose — groceries, a trip, or monthly spending. Set an amount, add expenses, and always know what you have left. Private and on-device.',
      path: '',
    });

    const destroyRef = inject(DestroyRef);

    // Gently auto-advance the screenshot strip so it's obvious there's more to
    // see. Browser-only (afterNextRender), off entirely for reduced-motion, and
    // paused whenever the user is hovering, touching, or keyboard-focused — the
    // strip stays natively scrollable throughout.
    afterNextRender(() => {
      const el = document.querySelector<HTMLElement>('.shots-row');
      if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      let paused = false;
      let resumeTimer: ReturnType<typeof setTimeout> | undefined;

      const advance = () => {
        if (paused) return;
        const first = el.querySelector('img');
        const gap = parseFloat(getComputedStyle(el).columnGap || '20') || 20;
        const step = (first?.getBoundingClientRect().width ?? 240) + gap;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
      };

      const pause = () => {
        paused = true;
        clearTimeout(resumeTimer);
      };
      // Touch has no "leave" event, so a tap pauses then resumes after a beat.
      const pauseThenResume = () => {
        paused = true;
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => (paused = false), 4000);
      };
      const resume = () => {
        clearTimeout(resumeTimer);
        paused = false;
      };

      el.addEventListener('pointerenter', pause);
      el.addEventListener('pointerleave', resume);
      el.addEventListener('pointerdown', pauseThenResume);
      el.addEventListener('focusin', pause);
      el.addEventListener('focusout', resume);

      const id = setInterval(advance, 3200);
      destroyRef.onDestroy(() => {
        clearInterval(id);
        clearTimeout(resumeTimer);
      });
    });
  }
}
