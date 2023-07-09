import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdateUnitComponent } from "./update-unit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdateUnitComponent", () => {

  let fixture: ComponentFixture<UpdateUnitComponent>;
  let component: UpdateUnitComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdateUnitComponent]
    });

    fixture = TestBed.createComponent(UpdateUnitComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
