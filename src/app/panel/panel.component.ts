import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  panelOpenState: boolean = true;

  products = this.fb.group([{
    id: 1,
    name: 'Books',
    description: 'List of books'

  },{
    id: 2,
    name: 'Tea and coffee',
    description: 'Black or green tea; coffee with milk'

  },{
    id: 3,
    name: 'Flowers',
    description: 'Wonderful flowers'

  },{
    id: 4,
    name: 'Tickets for movies',
    description: 'New films for you'

  },{
    id: 5,
    name: 'Clothes',
    description: 'Comfortable clothes'

  }, {
    id: 6,
    name: 'Sweets',
    description: 'The biggest cake'

  }])
  objectKeys = Object.keys;
  ngOnInit(): void {
  }

}
