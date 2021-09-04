import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonService } from 'src/app/services/json.service';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  public form: FormGroup;

  constructor(public json:JsonService, private formBuilder: FormBuilder) {
    this.json.getJson('http://localhost:8080/prestamo/listar').subscribe((res:any) => {
      console.log(res);
      this.brands = res;
    });
    
   }
  brands: any[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idLibro:[''],
      idUsuario:[''],
      fechaSalida:[''],
      fechaMaxima:[''],
      fechaDevo:['']
    })
  }

  public enviarData(){
    this.json.post('http://localhost:8080/prestamo/guardar',
    {
      idLibro:this.form.value.idLibro,
      idUsuario:this.form.value.idUsuario,
      fechaSalida:this.form.value.fechaSalida,
      fechaMaxima:this.form.value.fechaMaxima,
      fechaDevo:this.form.value.fechaDevo
    }
    )
    .subscribe( respuesta =>{
      console.log('Enviado')
    })

  }


}
