import { Component } from '@angular/core';
import { ListService } from './../list.service';
//import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  listArray :any =[];

  constructor ( private list:ListService) {
    this.getList();
  }

  getList() {
    this.list.getList().subscribe((data) => 
      this.listArray = data
      // console.log(this.listArray);
    );
    
    // map(d => 
    //   this.listArray.push({
    //     userid: d.userId,
    //     id: d.id,
    //     title: d.title,
    //   })))
    //   console.log(this.listArray);


    // this.list.getList().subscribe(data => {
    //     for (const d of (data as any)) {
    //       this.listArray.push({
    //         userid: d.userId,
    //         id: d.id,
    //         title: d.title,
    //       });
    //     }
    //     console.log(this.listArray);
    //   });
  }
}
