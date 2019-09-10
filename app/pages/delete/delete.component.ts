import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
	  users:any= {};
	  
  constructor(private userService: UserService) { }

  ngOnInit() {
  let _this = this;
	this.userService.getData().then((res)=> {
		console.log(res)
		_this.users = res;
	});
	}
	deleteData(){
		let _this = this;
	this.userService.deleteData(this.users._id).then((res)=> {
		console.log(res)
	});

  } 

}
