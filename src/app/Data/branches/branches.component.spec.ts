import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BranchesComponent } from "./branches.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BranchesComponent", () => {

  let fixture: ComponentFixture<BranchesComponent>;
  let component: BranchesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BranchesComponent]
    });

    fixture = TestBed.createComponent(BranchesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
