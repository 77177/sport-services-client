import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public testObject: string;
  public username = '';
  public sign = 'PROFILE';
  public creds = { username: '', password: ''};

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.testService.login(this.creds.username, this.creds.password)
      .subscribe(value => this.username = value.username);
  }

  logout(): void {
    this.testService.logout()
      .subscribe(value => value);
    this.username = '';
  }

  isValidUsername(): boolean {
    return this.username !== '';
  }
}
