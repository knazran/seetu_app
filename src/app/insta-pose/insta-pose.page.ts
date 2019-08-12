import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-insta-pose',
  templateUrl: './insta-pose.page.html',
  styleUrls: ['./insta-pose.page.scss'],
})
export class InstaPosePage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
