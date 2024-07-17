import { Component } from '@angular/core';
import { TitleComponent } from '../../partials/title/title.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PasswordsMatchValidator } from '../../../shared/models/validators/password_match_validator';
import { IUserRegister } from '../../../shared/models/Interfaces/IUserRegister';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [TitleComponent,ReactiveFormsModule,InputContainerComponent,RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  registerForm!:FormGroup;
  isSubmitted = false;

  constructor(private fb:FormBuilder,private userServ:UserService,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.registerForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirmPassword:['',[Validators.required]],
      address:['',[Validators.required,Validators.minLength(10)]]
    },{
      validators:PasswordsMatchValidator('password','confirmPassword')
    });
  }

  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    console.log(this.registerForm.value);
    // if(this.registerForm.invalid) return;
    const fv = this.registerForm.value;
    const user:IUserRegister = {
      name:fv['name'],
      email:fv['email'],
      password:fv['password'],
      confirmPassword:fv['confirmPassword'],
      address:fv['address'],
    }

    this.userServ.register(user).subscribe(_=>{
      this.router.navigate(['/login']);
      console.log("Working")
    })
  }

}
