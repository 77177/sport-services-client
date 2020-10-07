import { Component, OnInit } from '@angular/core';
import {TestService} from '../../service/test/test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  test(): string {
    return this.testService.test();
  }

}
