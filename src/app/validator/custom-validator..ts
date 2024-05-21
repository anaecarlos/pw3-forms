import {AbstractControl, ValidatorFn} from "@angular/forms";

export class CustomValidator {
    static contemEspacos(control: AbstractControl){
        if(!control.value){
            return null;
        }
        let resultado = control.value.indexOf(' ') !== -1;

        if(resultado){
            control.setErrors({ contemEspacos: true});
            return {contemEspacos: true}
        }else{
            control.setErrors(null);
            return null;
        }
    }

    static validarSenhasIguais(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const senha = control.parent?.get('senha')?.value;
            const confirmarSenha = control.value;
            return senha === confirmarSenha ? null : { senhasDiferentes: true };
        };
    }


}


