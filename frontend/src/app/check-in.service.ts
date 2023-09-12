import { Injectable } from '@angular/core';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(
    private RegService: RegistrationService
  ) { }

  get userList(){
    return this.RegService.UserList
  }
}
