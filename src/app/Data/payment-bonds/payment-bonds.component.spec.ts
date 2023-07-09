import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PaymentBondsComponent } from "./payment-bonds.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PaymentBondsComponent", () => {

  let fixture: ComponentFixture<PaymentBondsComponent>;
  let component: PaymentBondsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PaymentBondsComponent]
    });

    fixture = TestBed.createComponent(PaymentBondsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
