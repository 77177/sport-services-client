import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';
import {Credentials} from '../objects/creds';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public testObject: string;
  public userinfo = { username: ''};
  public sign = 'PROFILE';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
    this.testService.login('TRAINER', 'TEST').subscribe(value => this.userinfo.username = value.username );
    this.testService.getProfile()
      .subscribe(value => this.userinfo.username = value);

  }
}
