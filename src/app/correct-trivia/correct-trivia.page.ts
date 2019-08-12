import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-correct-trivia',
  templateUrl: './correct-trivia.page.html',
  styleUrls: ['./correct-trivia.page.scss'],
})
export class CorrectTriviaPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
