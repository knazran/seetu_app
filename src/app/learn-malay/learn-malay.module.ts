import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LearnMalayPage } from './learn-malay.page';

const routes: Routes = [
  {
    path: '',
    component: LearnMalayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LearnMalayPage]
})
export class LearnMalayPageModule {}
