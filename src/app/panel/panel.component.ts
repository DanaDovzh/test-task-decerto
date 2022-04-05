import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { InfoBtn } from 'src/models/product.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PanelComponent),
      multi: true,
    },
  ],
})
export class PanelComponent implements ControlValueAccessor {
  constructor() {}
  @Input() products: InfoBtn[];
  @Output() selected = new EventEmitter();
  
  panelTitle: string = 'List of goods';
  onChange: any;
  onTouch: any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(infoBtn) {
    if (infoBtn) {
      console.log(`Chosen element: `, infoBtn);
    }
  }

  infoBtn;

  selectedProduct = new FormControl('');
  panelOpenState: boolean = false;


  ngOnInit(): void {}

  selectProduct(event) {
    this.selected.emit(event);
  }
}
