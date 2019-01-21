import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as bodymovin from 'bodymovin';

import * as bip39 from 'bip39';
import * as hdkey from 'ethereumjs-wallet/hdkey';

import * as _ from 'lodash';

import { SeedService } from '../services/seed.service';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.page.html',
  styleUrls: ['./seed.page.scss']
})
export class SeedPage implements OnInit, AfterViewInit {

  // Bodymovin
  lockAnim = null;

  // Seed
  seedWords = [];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private seedService: SeedService) {

  }

  ngOnInit() {
    this.createAccount();
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });

    if (document.getElementById('lockMovin')) {
      const lockData = {
        wrapper: document.getElementById('lockMovin'),
        animType: 'html',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'assets/animations/lock.json',
        rendererSettings: {
          progressiveLoad: false,
        }
      };
      this.lockAnim = bodymovin.loadAnimation(lockData);
      this.lockAnim.setSpeed(0.75);
    }
  }

  createAccount() {
    const mnemonic = bip39.generateMnemonic();
    this.seedService.seed = mnemonic;
    this.seedWords = _.chunk(mnemonic.split(' '), 3);
    // const seed = bip39.mnemonicToSeed(mnemonic);
    // const root = hdkey.fromMasterSeed(seed);
    // const masterPrivateKey = root.privateKey.toString('hex');
  }

  onConfirm() {
    this.router.navigate(['/confirm']);
  }
}
