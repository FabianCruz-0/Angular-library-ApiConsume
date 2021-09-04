import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(public json:JsonService) {
    this.json.getJson('http://localhost:8080/usuario/listar').subscribe((res:any) => {
      // console.log(res);
      this.brands = res;
    });
   }

  ngOnInit() {
  }
  brands: any[] = [];
}
