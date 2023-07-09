import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavbarscComponent } from "./navbarsc.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NavbarscComponent", () => {

  let fixture: ComponentFixture<NavbarscComponent>;
  let component: NavbarscComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NavbarscComponent]
    });

    fixture = TestBed.createComponent(NavbarscComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
