import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDateComponent } from './create-update-date.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../common/services/user.service';
import { CreateUpdateUserService } from '../../../common/create-update-user.service';
import { DateService } from '../../../common/date.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap';

describe('CreateUpdateDateComponent', () => {
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
    expect(component)
      .toBeTruthy();
  });

  describe('initDates', () => {
    it('should return form object', () => {
      expect(component.initDates())
        .toBeTruthy();
    });
  });

  describe('addDate', () => {
    it('should return add date to datesCount', () => {
      const oldLength = (component.addDatesForm.controls.datesCount as FormArray).length;
      component.addDate();
      expect((component.addDatesForm.controls.datesCount as FormArray).length)
        .toBeGreaterThan(oldLength);
    });
  });

  describe('removeDate', () => {
    it('should return remove date to datesCount', () => {
      const oldLength = (component.addDatesForm.controls.datesCount as FormArray).length;
      component.removeDate(0);
      expect((component.addDatesForm.controls.datesCount as FormArray).length)
        .toBeLessThan(oldLength);
    });
  });

  describe('checkFirstElement', () => {
    it('should return false', () => {
      expect(component.checkFirstElement(1))
        .toBeFalsy();
    });

    it('should return true', () => {
      expect(component.checkFirstElement(0))
        .toBeTruthy();
    });
  });

  describe('leftBorderStylesForDate', () => {
    it('should return border-red for invalid topic', () => {
      component.addDatesForm.controls.datesCount.value[0].topic = '';
      expect(component.leftBorderStylesForDate('topic', 0))
        .toBe('border-red');
    });

    it('should return border-green for valid topic', () => {
      component.addDatesForm.controls.datesCount.value[0].topic = 'test';
      expect(component.leftBorderStylesForDate('topic', 0))
        .toBe('border-green');
    });

    it('should return border-red for invalid date', () => {
      component.addDatesForm.controls.datesCount.value[0].date = '';
      expect(component.leftBorderStylesForDate('date', 0))
        .toBe('border-red');
    });

    it('should return border-green for valid date', () => {
      component.addDatesForm.controls.datesCount.value[0].date = 'test';
      expect(component.leftBorderStylesForDate('date', 0))
        .toBe('border-green');
    });
  });

  describe('updateDates', () => {

  });

  describe('updateTopic', () => {

  });

  describe('loadDates', () => {

  });

});
