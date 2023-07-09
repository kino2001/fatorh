import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeheaderComponent } from "./homeheader.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HomeheaderComponent", () => {

  let fixture: ComponentFixture<HomeheaderComponent>;
  let component: HomeheaderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HomeheaderComponent]
    });

    fixture = TestBed.createComponent(HomeheaderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
