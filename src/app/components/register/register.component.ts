import { Component, OnInit } from '@angular/core';
import {User} from '../objects/user';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userToRegister = {
    username: '',
    firstName: '',
    password: '',
    lastName: '',
    email: '',
    authority: '',
    enabled: 'true'
  };

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.testService.register(this.userToRegister);
  }
}
