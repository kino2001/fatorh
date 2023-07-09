import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AnalyticsComponent } from "./analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AnalyticsComponent", () => {

  let fixture: ComponentFixture<AnalyticsComponent>;
  let component: AnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AnalyticsComponent]
    });

    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
