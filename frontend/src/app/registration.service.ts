import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})


export class RegistrationService {

  private userList: User[] = []


  register(firstName: string | null, lastName: string | null , pid: string | null) {
     const curUser: User = {
      firstName,
      lastName,
      pid
    };

    this.userList.push(curUser)
  }

  get UserList(){
    return [...this.userList]
  }

  constructor() { }
}



