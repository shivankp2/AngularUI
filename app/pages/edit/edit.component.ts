import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {UserService} from './../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    users:any = {};

  editform = new FormGroup({
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
  this.userService.saveData(this.editform.value).then((res)=> {
   console.log(res)
  });
}
}
