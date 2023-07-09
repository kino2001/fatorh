import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ImportaionComponent } from "./importaion.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ImportaionComponent", () => {

  let fixture: ComponentFixture<ImportaionComponent>;
  let component: ImportaionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ImportaionComponent]
    });

    fixture = TestBed.createComponent(ImportaionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
