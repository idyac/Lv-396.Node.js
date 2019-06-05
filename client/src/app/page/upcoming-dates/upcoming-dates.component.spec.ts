import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDatesComponent } from './upcoming-dates.component';
import { UserBarInfoComponent } from '../user-bar-info/user-bar-info.component';
import { FiltersService } from '../common/filters.service';
import { DateService } from '../common/date.service';
import { UserService } from '../../common/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterComponent } from '../filter/filter.component';
import { ListDatesComponent } from './list-dates/list-dates.component';
import { FilterDatesByPipe } from '../filter-dates-by.pipe';
import { UserImageComponent } from '../user-bar-info/user-image/user-image.component';
import { UpdateAvatarComponent } from '../create-update-user-page/update-avatar/update-avatar.component';
import { LinkToProfileComponent } from '../user-bar-info/link-to-profile/link-to-profile.component';
import { DropdownFilterComponent } from '../filter/dropdown-filter/dropdown-filter.component';
import { DatepickerFilterComponent } from '../filter/datepicker-filter/datepicker-filter.component';
import { ItemDateComponent } from './list-dates/item-date/item-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { appConfigProviders } from '../common/config';

describe('UpcomingDatesComponent', () => {
  let component: UpcomingDatesComponent;
  let fixture: ComponentFixture<UpcomingDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UpcomingDatesComponent,
        UserBarInfoComponent,
        FilterComponent,
        ListDatesComponent,
        UserImageComponent,
        UpdateAvatarComponent,
        LinkToProfileComponent,
        DropdownFilterComponent,
        DatepickerFilterComponent,
        ItemDateComponent,
        FilterDatesByPipe,
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot()
      ],
      providers: [
        appConfigProviders,
        UserService,
        DateService,
        FiltersService,
        UpcomingDatesComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
