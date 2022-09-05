import { Component } from '@angular/core';
import {Fault} from "./fault";
import {FaultService} from "./fault.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComtradeReaderClient';
  public faults: Fault[] = [];
  constructor(private faultService: FaultService) {
  }

  ngOnInit() {
    this.getFault();
  }

  public getFault(): void{
    this.faultService.getFault().subscribe(
      (response: Fault[]) => {
        this.faults = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    );
  }
}
