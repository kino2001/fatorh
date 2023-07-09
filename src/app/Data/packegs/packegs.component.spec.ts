import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PackegsComponent } from "./packegs.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PackegsComponent", () => {

  let fixture: ComponentFixture<PackegsComponent>;
  let component: PackegsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PackegsComponent]
    });

    fixture = TestBed.createComponent(PackegsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
