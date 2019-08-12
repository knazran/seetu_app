import { CorrectTriviaPageModule } from './correct-trivia/correct-trivia.module';
import { RainShelterPageModule } from './rain-shelter/rain-shelter.module';
import { LearnMalayPageModule } from './learn-malay/learn-malay.module';
import { InstaPosePageModule } from './insta-pose/insta-pose.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreTripPageModule } from './pre-trip/pre-trip.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PreTripPageModule,
    CorrectTriviaPageModule, RainShelterPageModule, LearnMalayPageModule, InstaPosePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
