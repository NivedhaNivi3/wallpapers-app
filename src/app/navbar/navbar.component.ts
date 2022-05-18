import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { ApiService } from '../api.service';
// import { Details, User } from '../models/User';
import * as TYPE from '../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  subscription: any;
  // user: TYPE.User = { firstName: '', lastName: 100, salary:  };

  ngOnInit(): void {
    // this.subscription = this.apiService.sub$.subscribe((data) => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 10000);
  }

  onSubmit() {
    this.subscription = this.apiService.sub$.pipe(take(2)).subscribe((data) => {
      console.log(data);
    });
  }

  // submit()
  // {
  //   let a = n
  // }
}
