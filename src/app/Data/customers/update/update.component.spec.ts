import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdateComponent } from "./update.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdateComponent", () => {

  let fixture: ComponentFixture<UpdateComponent>;
  let component: UpdateComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdateComponent]
    });

    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
