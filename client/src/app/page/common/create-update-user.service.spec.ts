import { getTestBed, TestBed } from '@angular/core/testing';

import { CreateUpdateUserService } from './create-update-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUpdateUserService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: CreateUpdateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [CreateUpdateUserService]
    });
    injector = getTestBed();
    service = injector.get(CreateUpdateUserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const testBedService: CreateUpdateUserService = TestBed.get(CreateUpdateUserService);
    expect(testBedService)
      .toBeTruthy();
  });
});
