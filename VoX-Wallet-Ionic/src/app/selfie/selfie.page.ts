import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, User } from '../user.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

// import * as bodymovin from 'bodymovin';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.page.html',
  styleUrls: ['./selfie.page.scss'],
})
export class SelfiePage implements OnInit, AfterViewInit {

  // Bodymovin
  cameraAnim = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private camera: Camera) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });

    // if (document.getElementById('cameraMovin')) {
    //   const cameraData = {
    //     wrapper: document.getElementById('cameraMovin'),
    //     animType: 'html',
    //     loop: true,
    //     prerender: true,
    //     autoplay: true,
    //     path: 'assets/animations/camera.json',
    //     rendererSettings: {
    //       progressiveLoad: false,
    //     }
    //   };
    //   this.cameraAnim = bodymovin.loadAnimation(cameraData);
    //   this.cameraAnim.setSpeed(0.75);
    // }
  }

  async onSelfie() {
    try {
      const cameraOptions: CameraOptions = {
        quality: 95,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      const imageData = await this.camera.getPicture(cameraOptions);
      // const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.router.navigate(['/address']);
    } catch (error) {
      console.error(`openCamera - error: ${error}`);
    }
  }
}
