import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ViewAfterSigningComponent } from "./view-after-signing.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ViewAfterSigningComponent", () => {

  let fixture: ComponentFixture<ViewAfterSigningComponent>;
  let component: ViewAfterSigningComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ViewAfterSigningComponent]
    });

    fixture = TestBed.createComponent(ViewAfterSigningComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
