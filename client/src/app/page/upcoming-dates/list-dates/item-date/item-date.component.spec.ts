import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDateComponent } from './item-date.component';
import { DateService } from '../../../common/date.service';
import { UserService } from '../../../../common/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemComponent', () => {
  let component: ItemDateComponent;
  let fixture: ComponentFixture<ItemDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDateComponent, ],
      imports: [ HttpClientTestingModule ],
      providers: [UserService, DateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDateComponent);
    component = fixture.componentInstance;
    component.date = {
      firstName: 'Bob',
      lastName: 'Chell',
      topic: 'Birthday',
      date: new Date,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
