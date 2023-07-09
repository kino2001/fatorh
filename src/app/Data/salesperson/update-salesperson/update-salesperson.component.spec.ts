import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdateSalespersonComponent } from "./update-salesperson.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdateSalespersonComponent", () => {

  let fixture: ComponentFixture<UpdateSalespersonComponent>;
  let component: UpdateSalespersonComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdateSalespersonComponent]
    });

    fixture = TestBed.createComponent(UpdateSalespersonComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
