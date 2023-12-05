
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDuiMask]',
  standalone: true,
})
export class DuiMaskDirective {



    constructor(private el: ElementRef) {}

    @HostListener('input', ['$event'])
    onInput(event: Event): void {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/\D/g, '');

      if (value.length > 8) {
        value = value.slice(0, 8) + '-' + value.slice(8, 9);
      }

      input.value = value;
    }
  }



