import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { SeedService } from '../services/seed.service';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss']
})
export class ConfirmPage implements OnInit, AfterViewInit {

  // Models
  confirmForm: FormGroup = null;

  // Flags
  isSending = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private userService: UserService,
    private seedService: SeedService) {

    this.confirmForm = formBuilder.group({
      seedWords: ['', Validators.compose([Validators.minLength(12), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ngOnInit() {
    console.log(this.seedService.seed);
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  async alertBox(msg: string) {
    const alertView = await this.alertController.create({
      header: msg,
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

  onConfirm() {
    const confirmedSeedWords = this.confirmForm.controls['seedWords'].value;
    const password = this.confirmForm.controls['password'].value;
    const confirmPassword = this.confirmForm.controls['confirmPassword'].value;

    if (confirmedSeedWords !== this.seedService.seed) {
      this.alertBox('seedWords didn\'t match!');
      return;
    }

    if (password !== confirmPassword) {
      this.alertBox('Passwords didn\'t match!');
      return;
    }

    this.isSending = true;

    const tmpModel: User = new User({
    });

    this.userService.saveUser(tmpModel);
    this.router.navigate(['/selfie']);
  }

}
