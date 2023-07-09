import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UserAnalyticsComponent } from "./user-analytics.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UserAnalyticsComponent", () => {

  let fixture: ComponentFixture<UserAnalyticsComponent>;
  let component: UserAnalyticsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UserAnalyticsComponent]
    });

    fixture = TestBed.createComponent(UserAnalyticsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
