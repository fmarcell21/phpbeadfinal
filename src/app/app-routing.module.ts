import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdataComponent} from "./listdata/listdata.component";
import { EditdataComponent} from "./editdata/editdata.component";
import { AdddataComponent} from "./adddata/adddata.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListdataComponent
  },
  {
    path: 'add',
    component: AdddataComponent
  },
  {
    path: 'edit',
    component: EditdataComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
