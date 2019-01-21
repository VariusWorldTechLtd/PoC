import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';

import { UserService, User } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  providers: [UserService]
})
export class DetailsPage implements OnInit, AfterViewInit {

  // Models
  detailsForm: FormGroup = null;

  // Flags
  isSending = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private userService: UserService) {

    this.detailsForm = formBuilder.group({
      title: ['Mr'],
      firstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      lastName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      dateOfBirth: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  onNext() {
    this.isSending = true;

    const tmpModel: User = new User({
      title: this.detailsForm.value.title,
      firstName: this.detailsForm.value.firstName,
      lastName: this.detailsForm.value.lastName,
      dateOfBirth: this.detailsForm.value.dateOfBirth,
      email: this.detailsForm.value.email
    });

    this.userService.saveUser(tmpModel);
    this.router.navigate(['/seed']);
  }

}
