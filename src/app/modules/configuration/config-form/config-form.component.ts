import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss'],
})
export class ConfigFormComponent implements OnInit {

  userForm!: FormGroup;
  pasatiempos: string[] = ['Leer', 'Deportes', 'Viajar', 'Música'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      pasatiempos: [[]],
      fechaNacimiento: [''],
      dui: ['', Validators.required]
    });
  }

  enviarFormulario() {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(this.userForm.value);
  }
}

