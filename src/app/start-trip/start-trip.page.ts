import { Component, OnInit, OnDestroy} from '@angular/core';
import { ToastController, Platform, ModalController, PopoverController, NavController} from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { PreTripPage} from '../pre-trip/pre-trip.page';
import { CorrectTriviaPage} from '../correct-trivia/correct-trivia.page';
import { RainShelterPage} from '../rain-shelter/rain-shelter.page';
import { LearnMalayPage } from '../learn-malay/learn-malay.page';
import { InstaPosePage} from '../insta-pose/insta-pose.page';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-start-trip',
  templateUrl: './start-trip.page.html',
  styleUrls: ['./start-trip.page.scss'],
})
export class StartTripPage implements OnInit {
  take_break_audio: any;
  hello_world;
  ding: any;
  congestion_audio: any;
  redirect_audio: any;
  thanks_audio: any;

  plussie_img = '../../assets/icon/plussie.png';

  plussie_count = 0;

  take_a_break_audio: any;
  constructor(private toastCtrl: ToastController, private nativeAudio: NativeAudio,
              private modalCtrl: ModalController, private popoverCtrl: PopoverController,
              private platform: Platform, private router: Router) {
  }

  ngOnInit() {
    this.hello_world = new Audio();
    this.hello_world.src = '../assets/pudu.mp3';
    this.hello_world.load();

    this.ding = new Audio();
    this.ding.src = '../assets/drip.wav';
    this.ding.load();

  }

  async presentTriviaPopover() {
    const popover = await this.popoverCtrl.create({
      component: PreTripPage,
      cssClass: 'select-modal',
      translucent: false
    });
    popover.onDidDismiss().then(async(dataReturned) => {
      if (dataReturned !== null) {
        const popover2 = await this.popoverCtrl.create({
          component: CorrectTriviaPage,
          cssClass: 'select-modal',
          translucent: false
        });
        return await popover2.present();
      }
    });
    return await popover.present();
  }

  async presentShelterPopover() {
    const popover = await this.popoverCtrl.create({
      component: RainShelterPage,
      cssClass: 'select-modal',
      translucent: false
    });
    return await popover.present();
  }

  async presentMalayPopover() {
    const popover = await this.popoverCtrl.create({
      component: LearnMalayPage,
      cssClass: 'select-modal',
      translucent: false
    });
    return await popover.present();
  }

  async presentInstaPopover() {
    const popover = await this.popoverCtrl.create({
      component: InstaPosePage,
      cssClass: 'select-modal',
      translucent: false
    });
    popover.onDidDismiss().then(() => {
      this.router.navigate(['/insta-main']);
    });
    return await popover.present();
  }

  async showToast() {
    setTimeout(() => {
      this.hello_world.play();
    }, 1000);
    // this.ding.play().then(() => {
    //   return;
    // }, 1000);
    this.ding.play();
    const toast = await this.toastCtrl.create({
      // tslint:disable-next-line:quotemark
      message: "Did You Know?",
      position: 'bottom',
      duration: 8000,
      color: 'primary',
      cssClass: 'plussie-talks'
    });
    toast.present();
  }

  async toastTakeABreak() {

    // Hacky ASS shit FUCKING WHY
    if (this.plussie_count === 0) {
      this.showToast();
    }
    if (this.plussie_count === 1) {
      this.ding = new Audio();
      this.ding.src = '../assets/drip.wav';
      this.ding.load();
      this.ding.play();
      this.presentTriviaPopover();
    }
    if (this.plussie_count === 2) {
      this.ding = new Audio();
      this.ding.src = '../assets/drip.wav';
      this.ding.load();
      this.ding.play();
      this.presentShelterPopover();
    }

    if (this.plussie_count === 3) {
      this.ding = new Audio();
      this.ding.src = '../assets/drip.wav';
      this.ding.load();
      this.ding.play();
      this.presentMalayPopover();
    }

    if (this.plussie_count === 4) {
      this.ding = new Audio();
      this.ding.src = '../assets/drip.wav';
      this.ding.load();
      this.ding.play();
      this.presentInstaPopover();
    }

    this.plussie_count = this.plussie_count + 1;
  }

}
