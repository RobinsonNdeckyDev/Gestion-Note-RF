// math.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = service.add(5, 3);
    expect(result).toBe(8);
  });

  it('should subtract two numbers', () => {
    const result = service.subtract(5, 3);
    expect(result).toBe(2);
  });
});












// import { TestBed } from '@angular/core/testing';

// import { MathService } from './math.service';

// describe('MathService', () => {
//   let service: MathService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MathService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
