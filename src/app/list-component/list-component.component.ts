import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  listArray: any = [];
  msg: string;

  constructor( private serice : ListService) { }

  ngOnInit() {
    this.getList();
    this.msg = this.serice.getData();
  }

  getList() {
    this.serice.getList().subscribe ((data) => {
    this.listArray = data;
    console.log(this.listArray);
    });
  }
  generatePdf(){
    const documentDefinition =  this.listArray;
    pdfMake.createPdf(documentDefinition).open();
   }
}
