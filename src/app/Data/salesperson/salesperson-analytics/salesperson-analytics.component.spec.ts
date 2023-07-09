import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SalespersonAnalyticsComponent } from "./salesperson-analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SalespersonAnalyticsComponent", () => {

  let fixture: ComponentFixture<SalespersonAnalyticsComponent>;
  let component: SalespersonAnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SalespersonAnalyticsComponent]
    });

    fixture = TestBed.createComponent(SalespersonAnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
