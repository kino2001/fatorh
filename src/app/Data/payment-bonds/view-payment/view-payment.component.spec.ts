import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ViewPaymentComponent } from "./view-payment.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ViewPaymentComponent", () => {

  let fixture: ComponentFixture<ViewPaymentComponent>;
  let component: ViewPaymentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ViewPaymentComponent]
    });

    fixture = TestBed.createComponent(ViewPaymentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
