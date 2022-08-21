import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  msg: string;

  constructor( private service: ListService, private rt : Router) { }

  ngOnInit() {
  }

  getclick() {
    this.service.setData(this.msg);
    this.rt.navigate(['/list']);
    // console.log(this.msg);
  }

}
