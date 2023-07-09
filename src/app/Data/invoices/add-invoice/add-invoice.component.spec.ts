import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AddInvoiceComponent } from "./add-invoice.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AddInvoiceComponent", () => {

  let fixture: ComponentFixture<AddInvoiceComponent>;
  let component: AddInvoiceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AddInvoiceComponent]
    });

    fixture = TestBed.createComponent(AddInvoiceComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
