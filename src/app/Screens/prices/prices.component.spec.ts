import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PricesComponent } from "./prices.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PricesComponent", () => {

  let fixture: ComponentFixture<PricesComponent>;
  let component: PricesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PricesComponent]
    });

    fixture = TestBed.createComponent(PricesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
