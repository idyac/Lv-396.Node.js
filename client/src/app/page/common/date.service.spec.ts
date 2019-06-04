import { TestBed, getTestBed } from '@angular/core/testing';
import { DateService } from './date.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../common/models/user';
import { DatesItem } from './dates-item';

describe('DateService', () => {

  const user: User = {
    watched_issues: [],
    roles: [],
    _id: '5cbb6d7ba4908a0db878c37a',
    firstName: 'Dmytro',
    lastName: 'Sobakapirat',
    position: 'Senior pomidor developer',
    email: 'sobaka-ne-vmerla@gmail.com',
    phone: '3801111111',
    photoURL: 'http://res.cloudinary.com/dd1mk/image/upload/v1555326362/hrms/avatars/iq5boujmnj2u0udtiyl7.jpg',
    type: 'dev',
    manager: {
      _id: '5c9a065b8c40cb0e8cd39d11',
      firstName: 'Skype',
      lastName: 'FileExchanger',
      position: 'Middle QA',
      email: 'dplscode@gmail.com',
      phone: '3802281488',
      contacts: [
        {
          contact_name: 'skype',
          contact_value: 'myskype'
        }
      ],
    },
    teamlead: {
      photoURL: '',
      firstName: 'Skype',
      lastName: 'FileExchanger',
      position: 'Middle QA',
      email: 'dplscode@gmail.com',
      phone: '3802281488',
      contacts: [
        {
          contactName: 'skype',
          contactValue: 'myskype'
        }
      ],
      department: {_id: '5cab274ece3843324cc6d774'},
      manager: {
        contacts: [{
          contact_name: 'skype',
          contact_value: 'myskype'
        }],
        email: 'dplscode@gmail.com',
        firstName: 'Skype',
        lastName: 'FileExchanger',
        phone: '3802281488',
        position: 'Middle QA',
        _id: '5c9a065b8c40cb0e8cd39d11',
      },
    },
    contacts: [],
    dates: [],
    department: {
      position: [],
      _id: '5cab274ece3843324cc6d774',
      name: 'Sales '
    }
  };

  const dateList: DatesItem[] = [
    {
      firstName: 'Dmytro',
      lastName: 'Sobakapirat',
      topic: 'Upcoming Review',
      date: new Date,
    },
    {
      firstName: 'Bob',
      lastName: 'Chell',
      topic: 'Birthday',
      date: new Date,
    },
    {
      firstName: 'Dmytro',
      lastName: 'Sobakapirat',
      topic: 'Upcoming Review',
      date: new Date,
    },
    {
      firstName: 'Ivan',
      lastName: 'Kotmurchik',
      topic: 'Salary rewiew',
      date: new Date,
    }
  ];

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DateService]
    });
    injector = getTestBed();
    service = injector.get(DateService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const testBedService: DateService = TestBed.get(DateService);
    expect(testBedService)
      .toBeTruthy();
  });

  it('should return false from isDateString when date is not a string', () => {
    expect(service.isDateString(213))
      .toBeFalsy();
  });

  it('should return true from isLoggedIn when date is not a string', () => {
    expect(service.isDateString('16/04/2019'))
      .toBeTruthy();
  });

  it('convertStringToDate should return date in GMT format', () => {
    expect(service.convertStringToDate('04/06/2019'))
      .toEqual(new Date('2019-06-04T00:00:00'));
  });

  it('convertDate should return date in \'DD/MM/YYYY\' format', () => {
    expect(service.convertDate(new Date()))
      .toBe('04/06/2019');
  });

  it('should return dates list of user', () => {
    expect(service.setDateList(user, dateList))
      .toEqual(dateList);
  });
});
