import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CustomersComponent", () => {

  let fixture: ComponentFixture<CustomersComponent>;
  let component: CustomersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CustomersComponent]
    });

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
