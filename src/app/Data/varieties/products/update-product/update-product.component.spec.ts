import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdateProductComponent } from "./update-product.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdateProductComponent", () => {

  let fixture: ComponentFixture<UpdateProductComponent>;
  let component: UpdateProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdateProductComponent]
    });

    fixture = TestBed.createComponent(UpdateProductComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
