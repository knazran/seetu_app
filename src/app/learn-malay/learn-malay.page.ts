import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-learn-malay',
  templateUrl: './learn-malay.page.html',
  styleUrls: ['./learn-malay.page.scss'],
})
export class LearnMalayPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
