import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator.';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder){}

  cadastroForm = this.formBuilder.group({
    nome : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    email : [null, [Validators.required, Validators.maxLength(40), Validators.email]],
    usuario : [null, [Validators.required, Validators.maxLength(15), CustomValidator.contemEspacos]],
    senha : [null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?!.* ).{8,16}$')]],
    confirmarSenha : [null, [Validators.required, CustomValidator.validarSenhasIguais()]]
  });

  onEnviar(){
    if (this.cadastroForm.valid) {
      console.table(this.cadastroForm.value);
    } else {
      console.error('Formulário inválido');
    }
  }
}
