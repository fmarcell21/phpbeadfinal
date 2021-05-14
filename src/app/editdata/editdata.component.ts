import { Component, OnInit } from '@angular/core';
import { datamodel} from "../datamodel";
import { MyserviceService} from "../myservice.service";
import { ListdataComponent} from "../listdata/listdata.component";

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  data = new datamodel();


  constructor(private service: MyserviceService, private lcomp: ListdataComponent) { }

  ngOnInit(): void {
    this.data = this.service.data[this.service.idget];



  }

  save(): void {
    this.data = this.service.data[this.service.idget];
  }

}
