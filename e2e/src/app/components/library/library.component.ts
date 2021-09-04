import { Component, OnInit} from '@angular/core';
import { dummyService } from "./dummy.service";
import { NgForm } from "@angular/forms";
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor( 
    private dummyService: dummyService, 
    public json:JsonService) {

    this.json.getJson('http://localhost:8080/libro/listar').subscribe((res:any) => {
      // console.log(res);
      this.brands = res;
    });
   }

  ngOnInit() {
    // this.brands = this.dummyService.get();
  }

  brands: any[] = [];

  state = 'disponible';

}
