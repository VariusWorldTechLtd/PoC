import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

// import { AlertController } from '@ionic/angular';

import * as bodymovin from 'bodymovin';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit, AfterViewInit {

  // 2FA
  recaptchaVerifier: firebase.auth.RecaptchaVerifier = null;

  // Models
  phoneForm: FormGroup = null;

  // Flags
  disableVerifyButton = false;

  // Bodymovin
  treeAnim = null;

  // public alertController: AlertController
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private afAuth: AngularFireAuth) {

    this.phoneForm = formBuilder.group({
      phone: ['', Validators.compose([Validators.minLength(11), Validators.required])]
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });

    // if (document.getElementById('treeMovin')) {
    //   const treeData = {
    //     wrapper: document.getElementById('treeMovin'),
    //     animType: 'html',
    //     loop: true,
    //     prerender: true,
    //     autoplay: true,
    //     path: 'assets/animations/tree.json',
    //     rendererSettings: {
    //       progressiveLoad: false,
    //     }
    //   };
    //   this.treeAnim = bodymovin.loadAnimation(treeData);
    //   this.treeAnim.setSpeed(0.75);
    // }
  }

  ionViewDidEnter() {
    firebase.auth().useDeviceLanguage();
    // firebase.auth().settings.appVerificationDisabledForTesting = true;
    (<any>window).recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    this.recaptchaVerifier = (<any>window).recaptchaVerifier;
  }

  async onVerify() {
    try {
      this.disableVerifyButton = true;

      // By now
      const phoneNumber = '+44' + this.phoneForm.value.phone;
      console.log(`onVerify - phone: ${phoneNumber}`);

      // Verify phone / signInWithPhoneNumber
      (<any>window).verifier = await this.afAuth.auth.signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier);

      // const success: any = verifier.confirm(input['code']);
      this.router.navigate(['/code']);

      // const alertView = await this.alertController.create({
      //   header: 'Enter confirmation code',
      //   inputs: [{
      //     name: 'code',
      //     type: 'text',
      //     placeholder: 'Confirmation Code'
      //   }],
      //   buttons: [
      //     {
      //       text: 'Cancel',
      //       role: 'cancel',
      //       cssClass: 'secondary',
      //       handler: () => { console.log('Verification aborted.'); }
      //     }, {
      //       text: 'OK',
      //       cssClass: 'secondary',
      //       handler: (input) => {
      //         const success: any = verifier.confirm(input['code']);
      //         this.router.navigate(['/details', success['user']['phoneNumber']]);
      //       }
      //     }
      //   ]
      // });
      // await alertView.present();
    } catch (error) {
      console.error(`onVerify - error: ${error}`);
    }
  }

}
