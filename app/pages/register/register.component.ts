import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {UserService} from './../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

	uiform = new FormGroup({
	id: new FormControl(''),
	name: new FormControl(''),
	company: new FormControl(''),
	email: new FormControl('')
	});
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
   onSubmit(){
	let _this = this;
	this.userService.saveData(this.uiform.value).then((res)=> {
		console.log(res)
});
}
}
