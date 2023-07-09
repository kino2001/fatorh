import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BranchAnalyticsComponent } from "./branch-analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BranchAnalyticsComponent", () => {

  let fixture: ComponentFixture<BranchAnalyticsComponent>;
  let component: BranchAnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BranchAnalyticsComponent]
    });

    fixture = TestBed.createComponent(BranchAnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
