import { Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true
    }
  ]
})

export class ButtonComponent implements ControlValueAccessor {

  constructor(private _snackBar: MatSnackBar){}
  onChange: any;
  onTouch: any;
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(infoBtn) {
    this.infoBtn = infoBtn;
  }

  infoBtn;
  openSnackBar(message: string) {
    console.log(this.infoBtn);
    this._snackBar.open(message, 'Close');
  }
}
