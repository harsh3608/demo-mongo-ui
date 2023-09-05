import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 

  constructor(
    //private usersService: UsersService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      
    })
  }




}
