import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductAnalyticsComponent } from "./product-analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ProductAnalyticsComponent", () => {

  let fixture: ComponentFixture<ProductAnalyticsComponent>;
  let component: ProductAnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ProductAnalyticsComponent]
    });

    fixture = TestBed.createComponent(ProductAnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
