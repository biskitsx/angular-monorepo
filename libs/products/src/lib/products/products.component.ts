import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedUiComponent } from '@angular-monorepo/shared-ui';
@Component({
  selector: 'lib-products',
  imports: [CommonModule, SharedUiComponent ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
