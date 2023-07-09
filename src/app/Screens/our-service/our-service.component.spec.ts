import { NO_ERRORS_SCHEMA } from "@angular/core";
import { OurServiceComponent } from "./our-service.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("OurServiceComponent", () => {

  let fixture: ComponentFixture<OurServiceComponent>;
  let component: OurServiceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [OurServiceComponent]
    });

    fixture = TestBed.createComponent(OurServiceComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
