import { Component, OnInit, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Value',

  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http: HttpClient) { }
values: any;
err: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getValues();
  }

  // tslint:disable-next-line:typedef
  getValues()
  {

this.http.get('http://localhost:5000/api/Home/Index').subscribe(Response => {
this.values = Response;

// tslint:disable-next-line:no-shadowed-variable
}, error => this.values = '<p>milad</p>'
);

  }

}
