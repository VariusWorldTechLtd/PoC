import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import * as bodymovin from 'bodymovin';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit, AfterViewInit {

  // Bodymovin
  phoneAnim = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });

    if (document.getElementById('phoneMovin')) {
      const phoneData = {
        wrapper: document.getElementById('phoneMovin'),
        animType: 'html',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'assets/animations/phone.json',
        rendererSettings: {
          progressiveLoad: false,
        }
      };
      this.phoneAnim = bodymovin.loadAnimation(phoneData);
      this.phoneAnim.setSpeed(0.75);
    }
  }

  async onKeyUp(input: string) {
    try {
      console.log(`onKeyUp: ${ input }`);
      if ( input.length < 6 ) {
        return;
      }
      await (<any>window).verifier.confirm( input );
      this.router.navigate(['/details']);
    } catch (error) {
      console.error(`onVerify - error: ${ error }`);
    }
  }

}
