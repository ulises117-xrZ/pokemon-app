import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DialogComponent } from 'src/app/core/components/dialog/dialog/dialog.component';
import { IProfile, IStoreInitial } from 'src/app/data/interfaces/IStore';
import { saveConfigInfo } from 'src/app/store/actions/pokemon.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss'],
})
export class ConfigFormComponent {

  userForm!: FormGroup;
  pasatiempos: string[] = ['Leer', 'Deportes', 'Viajar', 'Música'];
  imagenSeleccionada: string | ArrayBuffer;
  textoBoton: string = "Adjunta una foto";
  iconBoton: string = "cloud_upload";
  esMayor: boolean = true;
  edad: number = 0;
  isLoading: boolean =false;


  constructor(
    private store: Store<{ pokemonState: IStoreInitial }>,
    private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog) {

    this.imagenSeleccionada = "";
    this.userForm = this.formBuilder.group({
      profilePhoto: [null, Validators.required],
      nombre: [null, Validators.required],
      carnetMinoridad: null,
      pasatiempos: [[]],
      fechaNacimiento: [null, Validators.required],
      dui: [null, [Validators.required, this.validateDuiFormat.bind(this)]],
    });

    this.userForm.get('fechaNacimiento')?.valueChanges.subscribe(() => {
      this.calculateAge();
    });
  }

  openDialog(title: string, text: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        title,
        text,
        // onYes: () => {
        //   // Lógica personalizada al hacer clic en "Aceptar"
        //   console.log('Función personalizada ejecutada');
        // }
      }
    });
  }
  calculateAge() {
    const fechaNacimientoControl = this.userForm.get('fechaNacimiento');
    const fechaNacimientoValue = fechaNacimientoControl?.value;

    if (fechaNacimientoValue) {
      const fechaNacimiento = new Date(fechaNacimientoValue);

      if (!isNaN(fechaNacimiento.getTime())) {
        const today = new Date();
        let age = today.getFullYear() - fechaNacimiento.getFullYear();
        const monthDiff = today.getMonth() - fechaNacimiento.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < fechaNacimiento.getDate())) {
          age--;
        }
        this.edad = age;
        this.esMayor = age >= 18;
      } else {
        console.error('La fecha de nacimiento no es válida.');
      }
    } else {
      console.error('La fecha de nacimiento es nula o indefinida.');
    }
  }

  // Función para validar el formato del DUI
  validateDuiFormat(control: any) {
    // Verifica si el campo está vacío
    if (!control.value) {
      return { required: true };
    }
    if (control.value.length < 9) {
      return { invalidDuiLength: true };
    }
    return null;
  }


  handleFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file.name);
      this.previewImagen(file);
    }
  }

  previewImagen(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagenSeleccionada = e.target.result;
    };

    reader.readAsDataURL(file);
    this.textoBoton = file.name;
    this.iconBoton = "delete_forever";
  }
  enviarFormulario() {
    const { dui, fechaNacimiento, nombre, pasatiempos, profilePhoto, carnetMinoridad } = this.userForm.value;
    if (fechaNacimiento === null &&
      nombre === null &&
      profilePhoto === null
    ) {
      this.openDialog("Campos requeridos", "los campos marcados con * son requeridos");
      return;
    }
    if (profilePhoto === null) {
      this.openDialog("Imagen requerida", "Debes seleccionar una imagen de perfil");
      return;
    }
    if (fechaNacimiento === null) {
      this.openDialog("Campo requerido", "Fecha de nacimimiento no puede quedar vacio");
      return;
    }
    if (nombre === null) {
      this.openDialog("Campo requerido", "Nombre no puede quedar vacio");
      return;
    }
    if (dui === null && this.esMayor) {
      this.openDialog("Campo requerido", "DUI no puede quedar vacio");
      return;
    }
    // Aquí puedes manejar la lógica de envío del formulario
    const data: IProfile = {
      photo: this.imagenSeleccionada,
      name: nombre,
      activities: pasatiempos ?? [],
      birthDate: fechaNacimiento,
      dui: dui ?? "",
      minorityDoc: carnetMinoridad ?? "",
      age: this.edad
    }
    this.store.dispatch(saveConfigInfo({ data }))
    this.isLoading = true;
  }
}

