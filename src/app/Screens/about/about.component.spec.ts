import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AboutComponent } from "./about.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AboutComponent", () => {

  let fixture: ComponentFixture<AboutComponent>;
  let component: AboutComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AboutComponent]
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
