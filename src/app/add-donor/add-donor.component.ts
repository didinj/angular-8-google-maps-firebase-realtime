import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.scss']
})
export class AddDonorComponent implements OnInit {

  donorForm: FormGroup;
  name: string='';
  phone: string='';
  email: string='';
  lat = '';
  lng = '';
  ref = firebase.database().ref('donors/');

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.lat = this.route.snapshot.paramMap.get('lat');
    this.lng = this.route.snapshot.paramMap.get('lng');
  }

  ngOnInit() {
    this.donorForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'email' : [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    const donor = form;
    donor.coords = { latitude: this.lat, longitude: this.lng };
    const newDonor = firebase.database().ref('donors/').push();
    newDonor.set(donor);
    this.router.navigate(['/']);
  }

}
