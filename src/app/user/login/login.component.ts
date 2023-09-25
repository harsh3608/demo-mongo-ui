import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      email: new FormControl('',[Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required ])
    })
  }



  OnSubmit() {
    
  }


  //Getter functions to get for-values from form-controls
  get Email(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }
}
