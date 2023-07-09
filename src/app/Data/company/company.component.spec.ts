import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CompanyComponent", () => {

  let fixture: ComponentFixture<CompanyComponent>;
  let component: CompanyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CompanyComponent]
    });

    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
