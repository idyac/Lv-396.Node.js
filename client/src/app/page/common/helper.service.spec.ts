import { getTestBed, TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatesItem } from './dates-item';

describe('HelperService', () => {
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
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [HelperService]
    });
    injector = getTestBed();
    service = injector.get(HelperService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const testBedService: HelperService = TestBed.get(HelperService);
    expect(testBedService)
      .toBeTruthy();
  });

  it('should return dates list of user', () => {
    expect(service.sortList(dateList))
      .toEqual(dateList);
  });
});
