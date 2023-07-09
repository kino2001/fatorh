import { NO_ERRORS_SCHEMA } from "@angular/core";
import { OtpComponent } from "./otp.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("OtpComponent", () => {

  let fixture: ComponentFixture<OtpComponent>;
  let component: OtpComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [OtpComponent]
    });

    fixture = TestBed.createComponent(OtpComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
