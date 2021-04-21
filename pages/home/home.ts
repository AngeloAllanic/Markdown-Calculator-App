import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  op: number;
  sp: number;
 
  s: number;
  mr: number;

  constructor(public navCtrl: NavController) {}

  calculateMCA() {
    this.s = (this.op - this.sp);
    this.s = parseFloat(this.s.toFixed(2));

    this.mr = (this.s/this.sp) * 100; 
    this.mr = parseFloat(this.mr.toFixed(2));
  }
  
}