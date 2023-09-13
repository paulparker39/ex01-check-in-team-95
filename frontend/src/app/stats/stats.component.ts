import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  
  // found info on DatePipe on Stack Overflow: https://stackoverflow.com/questions/35754586/format-date-as-dd-mm-yyyy-using-pipes
  providers: [DatePipe]

})
export class StatsComponent {

  userList = this.regService.UserList

  constructor(
    private regService: RegistrationService
  )
  {}
  sortByName() {
    this.userList = [...this.regService.UserList].sort((a, b) => a.firstName!.localeCompare(b.firstName!))
  }

  sortByDate(){
    this.userList = [...this.regService.UserList].sort((a, b) => a.date!.getTime() - b.date!.getTime())
  }

}
