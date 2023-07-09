import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProductsComponent", () => {

  let fixture: ComponentFixture<ProductsComponent>;
  let component: ProductsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProductsComponent]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
