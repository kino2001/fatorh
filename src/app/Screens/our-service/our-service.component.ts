import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-our-service",
  templateUrl: "./our-service.component.html",
  styleUrls: ["./our-service.component.scss"]
})

export class OurServiceComponent implements OnInit {
  
  constructor( private spinner: NgxSpinnerService,) { }


  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1200);
  }
}
