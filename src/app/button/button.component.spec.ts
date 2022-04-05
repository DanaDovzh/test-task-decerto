import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoBtn } from 'src/models/product.model';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [MatSnackBarModule, MatIconModule, BrowserAnimationsModule],
      providers: [
        {provide: MAT_SNACK_BAR_DATA, useValue: {}}
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a button', () => {
    expect(component).toBeTruthy();

  });

  it('should open snack bar', () => {
    const infoBtn: InfoBtn = {
      id: 1,
      name: 'Books',
      description: 'List of books'
    };
    spyOn(component, 'openSnackBar');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click(infoBtn.description, infoBtn);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.openSnackBar(infoBtn.description, infoBtn)).toHaveBeenCalled();
    });
  })
});
