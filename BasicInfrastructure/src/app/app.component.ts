import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicInfrastructure';
  @BlockUI() blockUI: NgBlockUI;
  constructor(public _http: HttpClient) {

  }
  RegisterUser() {
    this.blockUI.start('Loading...');
    var data = {
      Email: encodeURI("rohitk@winjit.com"),
      Password: encodeURI("Rohit@123"),
      grant_type: encodeURI("Password")
    }
    let headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
     
    });
     let options = { headers: headers };
  
    this._http.post("http://192.168.9.66/TestAPI/token", "userName=" + encodeURIComponent("rohitk@winjit.com") +
    "&password=" + encodeURIComponent("Rohit@123") +
    "&grant_type=password",
    options
    ).subscribe((data) => {
      console.log(data);
      setTimeout(() => {
        this.blockUI.stop(); // Stop blocking
      }, 5000);

    },
      (error) => {
        console.log("Error",error as string);
      });

  }


}

  //  this._http.get("http://localhost:59424/api/GetEmployeeData").subscribe((data)=>{
    //    console.log("data",data);
    //  });