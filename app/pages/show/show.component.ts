import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  users:any= {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    let _this = this;
    this.userService.getData().then((res)=> {
      console.log(res)
      _this.users = res;
    });
  }

}
