import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PUBLISHERS, Publisher } from '../interfaces/currency.enum';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export default class CountComponent {
  public showDetails = false;
  public currentTransfer: any; // Variable para almacenar el valor de transfer
  public currentCharge: any; // Variable para almacenar el valor de charge

  public publishers: PUBLISHERS[] = [
    { id: 'Dolar', currency: 'DOLAR' },
    { id: 'Euro', currency: 'EURO' },
    { id: 'Soles', currency: 'SOLES' },
  ];

  constructor(
    private fb: FormBuilder,
    private currencyService: CurrencyService
  ) {}

  public myForm: FormGroup = this.fb.group({
    monedaOrigen: new FormControl<Publisher>(Publisher.dolar),
    monto: new FormControl('', [Validators.required]),
    monedaDestino: new FormControl('', [Validators.required]),
  });

  public price: number = 4.08;

  count() {}

  onSave() {
    /*
    if (this.myForm.valid) {
      // Almacena los valores antes de limpiar el formulario
      this.currentTransfer = this.myForm.value.transfer;
      this.currentCharge = this.myForm.value.charge;

      const { data, ...rest } = this.myForm.value;

      // Limpia solo los campos relevantes del formulario
      this.myForm.patchValue({
        rest,
      });

      this.showDetails = true;
    } */

    const { monto, transfmonedaOrigener, monedaDestino } = this.myForm.value;

    this.currencyService
      .changeCurrecny(monto, transfmonedaOrigener, monedaDestino)
      .subscribe((sucess) => {
        console.log({ sucess });
      });
  }
}
