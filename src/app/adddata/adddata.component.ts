import { Component, OnInit } from '@angular/core';
import { datamodel} from "../datamodel";
import { MyserviceService} from "../myservice.service";

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  data = new datamodel();

  constructor(private service: MyserviceService) { }

  ngOnInit(): void {


  }

  save(): void {
    this.service.data.push(this.data);
    this.data = new datamodel();
  }

}
