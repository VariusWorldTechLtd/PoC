import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as bodymovin from 'bodymovin';

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.page.html',
  styleUrls: ['activity.page.scss']
})
export class ActivityPage implements OnInit, AfterViewInit {

  // Bodymovin
  treeAnim = null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });

    if (document.getElementById('treeMovin')) {
      const treeData = {
        wrapper: document.getElementById('treeMovin'),
        animType: 'html',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'assets/animations/tree.json',
        rendererSettings: {
          progressiveLoad: false,
        }
      };
      this.treeAnim = bodymovin.loadAnimation(treeData);
      this.treeAnim.setSpeed(0.75);
    }
  }




}
