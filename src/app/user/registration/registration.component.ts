import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  isLoading: boolean = false;


  constructor(
    //private usersService: UsersService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*.{10,10}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')
      ]),
      createdDate: new FormControl(''),
      userType: new FormControl('user')
    })
  }



  OnSubmit() {
    this.registrationForm.markAllAsTouched();
    this.isLoading = true;
    setTimeout(() => {
      if (this.registrationForm.valid) {
        console.log(this.registrationForm.value);
        this.isLoading = false;
      }
    }, 2000);

  }


  //Getter functions to get for-values from form-controls
  get FirstName(): FormControl {
    return this.registrationForm.get("firstName") as FormControl;
  }
  get LastName(): FormControl {
    return this.registrationForm.get("lastName") as FormControl;
  }
  get Gender(): FormControl {
    return this.registrationForm.get("gender") as FormControl;
  }
  get Dob(): FormControl {
    return this.registrationForm.get("dob") as FormControl;
  }
  get Email(): FormControl {
    return this.registrationForm.get("email") as FormControl;
  }
  get Phone(): FormControl {
    return this.registrationForm.get("phone") as FormControl;
  }
  get Password(): FormControl {
    return this.registrationForm.get("password") as FormControl;
  }
}
