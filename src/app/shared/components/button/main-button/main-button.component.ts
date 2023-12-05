import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent {
  @Input() buttonText: string = 'Click me';
  @Input() status: boolean = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
