import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CompanyAnalyticsComponent } from "./company-analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CompanyAnalyticsComponent", () => {

  let fixture: ComponentFixture<CompanyAnalyticsComponent>;
  let component: CompanyAnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CompanyAnalyticsComponent]
    });

    fixture = TestBed.createComponent(CompanyAnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
