import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdatecompanyComponent } from "./updatecompany.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdatecompanyComponent", () => {

  let fixture: ComponentFixture<UpdatecompanyComponent>;
  let component: UpdatecompanyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdatecompanyComponent]
    });

    fixture = TestBed.createComponent(UpdatecompanyComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
