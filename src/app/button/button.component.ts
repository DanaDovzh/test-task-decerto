import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoBtn } from './../../models/product.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}
  infoBtn: InfoBtn;

  @Input() product;
  @Output() selectProduct = new EventEmitter();

  ngOnInit(): void {}

  openSnackBar(message: string, product: InfoBtn): void {
    this.selectProduct.emit(product);
    this._snackBar.open(message, 'Close', {
      duration: 1000,
    });
  }
}
