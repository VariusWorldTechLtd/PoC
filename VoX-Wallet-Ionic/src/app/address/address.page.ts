import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService, User } from '../user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit, AfterViewInit {

  // Models
  addressForm: FormGroup = null;

  // Flags
  isSending = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private userService: UserService) {

    this.addressForm = formBuilder.group({
      addressLine1: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
      addressLine2: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
      city: ['', Validators.compose([Validators.maxLength(36), Validators.required])],
      postcode: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      country: ['', Validators.compose([Validators.minLength(2), Validators.required])],
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  onDone() {

  }

}
