import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
  standalone: true,
})
export class BoxComponent {
  @Input() title: string = 'Box Component zaza';
  @Input() n: number = 4;
  @Output() buttonClicked = new EventEmitter<void>();
  @Output() titleChanged = new EventEmitter<string>();

  onButtonClick() {
    console.log('Button clicked in Child Component');
    this.buttonClicked.emit()
  }
}
