import { Component, OnInit } from '@angular/core';
import { MyserviceService} from "../myservice.service";

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {

  constructor(public service: MyserviceService) { }

  ngOnInit(): void {
    if ( this.service.data.length === 0) {
      this.service.fetch().subscribe(
        {
          next:(data: any) => (console.log('Start'), this.service.data = data.data)

        }

      )
    }

  }

  delete(data: any): void {
    this.service.data.splice(this.service.data.indexOf(data), 1);
  }

}
