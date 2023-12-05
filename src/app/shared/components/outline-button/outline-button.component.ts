import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent {
  @Input() buttonText: string = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
