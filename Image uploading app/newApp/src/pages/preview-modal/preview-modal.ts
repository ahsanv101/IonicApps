
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-preview-modal',
  templateUrl: 'preview-modal.html',
})
export class PreviewModalPage {
  img: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.img = this.navParams.get('img');
  }
 
  close() {
    this.viewCtrl.dismiss();
  }
 
}