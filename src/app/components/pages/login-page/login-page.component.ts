import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../../partials/title/title.component';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InputContainerComponent } from '../../partials/input-container/input-container.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,TitleComponent,InputContainerComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm!:FormGroup;
  isSubmitted=false;
  
  constructor(private formBuilder:FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;
    this.userService.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe(()=>{
      this.router.navigateByUrl('');
    });

  }
}
