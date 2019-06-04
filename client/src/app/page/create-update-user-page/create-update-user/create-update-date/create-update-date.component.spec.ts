import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDateComponent } from './create-update-date.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../common/services/user.service';
import { CreateUpdateUserService } from '../../../common/create-update-user.service';
import { DateService } from '../../../common/date.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap';

describe.only('CreateUpdateDateComponent', () => {
  let component: CreateUpdateDateComponent;
  let fixture: ComponentFixture<CreateUpdateDateComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateDateComponent, DatepickerComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot()
      ],
      providers: [UserService, DateService, CreateUpdateUserService, CreateUpdateDateComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addDatesForm.valid)
      .toBeFalsy();
  });

  it('form should be valid', () => {
    expect(component.addDatesForm.valid)
      .toBeFalsy();
    component.addDatesForm.controls.datesCount['topic'].setValue('Upcoming review');
    component.addDatesForm.controls.datesCount['date'].setValue('06/05/2019');
    expect(component.addDatesForm.valid)
      .toBeTruthy();
  });

  it('form should be invalid', () => {
    component.addDatesForm.controls.topic.setValue('');
    component.addDatesForm.controls.date.setValue('');
    expect(component.addDatesForm.valid)
      .toBeFalsy();
  });

});
