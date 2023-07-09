import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})

export class ContactComponent implements OnInit {
  
  constructor( private spinner: NgxSpinnerService,) { }


  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
