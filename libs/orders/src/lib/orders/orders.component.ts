import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from "../../../../shared-ui/src/lib/shared-ui/shared-ui.component";

@Component({
  selector: 'lib-orders',
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
