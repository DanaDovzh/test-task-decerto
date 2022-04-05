import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InfoBtn } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  selectedProduct: FormGroup = this.fb.group({
    itemSelected: null,
  });

  products: InfoBtn[] = [
    {
      id: 1,
      name: 'Books',
      description: 'List of books',
    },
    {
      id: 2,
      name: 'Tea and coffee',
      description: 'Black or green tea; coffee with milk',
    },
    {
      id: 3,
      name: 'Flowers',
      description: 'Wonderful flowers',
    },
    {
      id: 4,
      name: 'Tickets for movies',
      description: 'New films for you',
    },
    {
      id: 5,
      name: 'Clothes',
      description: 'Comfortable clothes',
    },
    {
      id: 6,
      name: 'Sweets',
      description: 'The biggest cake',
    },
  ];

  panelOpenState = false;

  ngOnInit(): void {}

  selected(event): void {
    this.selectedProduct.patchValue({
      itemSelected: event,
    });
  }
}
