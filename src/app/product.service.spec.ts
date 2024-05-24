import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  let service: ProductService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should call getById', () => {
    //Arrange
    const id = 1;

    //Act
    service.getById(id).subscribe();
    const req = testingController.expectOne(`${service.apiUrl}${id}`);

    //Assert
    expect(req.request.method).toBe('GET');
    testingController.verify();
  });

  it('should call create', () => {
    //Arrange
    const product: Product = { name: 'Shoe' };

    //Act
    service.create(product).subscribe();
    const req = testingController.expectOne(service.apiUrl);

    //Assert
    expect(req.request.method).toBe('POST');
    testingController.verify();
  });
});
