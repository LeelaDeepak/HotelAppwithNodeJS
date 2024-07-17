import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator = (passwordControlName:string,confirmPasswordContorlName:string)=>{
    const validator = (form:AbstractControl)=>{
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordContorlName);
        if(!passwordControl || !confirmPasswordControl) return;
        if(passwordControl.value !== confirmPasswordControl.value){
            confirmPasswordControl.setErrors({NotMatch:true});
        }else{
            const errors = confirmPasswordControl.errors;
            if(!errors) return;
            delete errors["notMatch"];
            confirmPasswordControl.setErrors(errors);
        }
    }
    return validator;
}