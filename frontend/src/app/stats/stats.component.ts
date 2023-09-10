import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  userList = this.regService.UserList

  constructor(
    private regService: RegistrationService
  )
  {}

}
