import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public testObject: string;
  public username: string;
  public sign = 'PROFILE';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.test()
      .subscribe(value => this.testObject = value.test);
    this.testService.getProfile()
      .subscribe(value => this.username = value);

  }
}
