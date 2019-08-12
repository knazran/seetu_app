import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-rain-shelter',
  templateUrl: './rain-shelter.page.html',
  styleUrls: ['./rain-shelter.page.scss'],
})
export class RainShelterPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
