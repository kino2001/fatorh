import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpdateUsersComponent } from "./update-users.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpdateUsersComponent", () => {

  let fixture: ComponentFixture<UpdateUsersComponent>;
  let component: UpdateUsersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpdateUsersComponent]
    });

    fixture = TestBed.createComponent(UpdateUsersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
