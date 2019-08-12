import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'plan-trip', loadChildren: './plan-trip/plan-trip.module#PlanTripPageModule' },
  { path: 'recommend-trip', loadChildren: './recommend-trip/recommend-trip.module#RecommendTripPageModule' },
  { path: 'pre-trip', loadChildren: './pre-trip/pre-trip.module#PreTripPageModule' },
  { path: 'start-trip', loadChildren: './start-trip/start-trip.module#StartTripPageModule' },
  { path: 'trip-consideration', loadChildren: './trip-consideration/trip-consideration.module#TripConsiderationPageModule' },
  { path: 'correct-trivia', loadChildren: './correct-trivia/correct-trivia.module#CorrectTriviaPageModule' },
  { path: 'rain-shelter', loadChildren: './rain-shelter/rain-shelter.module#RainShelterPageModule' },
  { path: 'learn-malay', loadChildren: './learn-malay/learn-malay.module#LearnMalayPageModule' },
  { path: 'insta-pose', loadChildren: './insta-pose/insta-pose.module#InstaPosePageModule' },
  { path: 'insta-main', loadChildren: './insta-main/insta-main.module#InstaMainPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
