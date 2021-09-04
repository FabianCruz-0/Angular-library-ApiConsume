import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(public json:JsonService) {
    this.json.getJson('http://localhost:8080/libro/listar').subscribe((res:any) => {
      // console.log(res);
      this.brands = res;
    });
   }

  brands: any[] = [];

  ngOnInit(): void {
  }

}
