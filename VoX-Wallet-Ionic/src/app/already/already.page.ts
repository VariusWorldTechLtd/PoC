import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-already',
  templateUrl: './already.page.html',
  styleUrls: ['./already.page.scss'],
})
export class AlreadyPage implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  async showComingSoon() {
    const alertView = await this.alertController.create({
      header: 'Coming soon!',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }
      ]
    });
    await alertView.present();
  }

  onRestore() {
    this.showComingSoon();
  }

}
