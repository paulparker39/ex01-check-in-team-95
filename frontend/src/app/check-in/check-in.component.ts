import { Component } from '@angular/core';

import { CheckInService } from '../check-in.service';
import { FormBuilder } from '@angular/forms';
import { Validator } from '@angular/forms';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {

  constructor(
  private formBuilder: FormBuilder,
  private checkInService: CheckInService
  ){}
  checkInForm = this.formBuilder.group({
    pid: ['']
  });


  onSubmit(): void {

    const userList = this.checkInService.userList
    const curPid = this.checkInForm.get('pid')!.value
    const curDate = new Date()

    if (curPid!.length != 9){
      window.alert("PID is not 9 digits. Please reenter.")
    }
    else{
      for(let i = 0; i < userList.length; i++){
        const curUser = userList[i]
        if (curUser.pid && curUser.pid === curPid){
          curUser.date = curDate
          window.alert("User " + curUser.firstName + " " + curUser.lastName + " is registered and checked in.")
          this.checkInForm.reset
          return
        }
      }
      window.alert("PID: " + curPid + " could not be found.")
    }
}

}
