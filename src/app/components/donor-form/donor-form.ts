import { Component } from '@angular/core';
import { DonorService } from '../../donor.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donor-form',
  imports: [CommonModule, MatFormFieldModule, FormsModule],
  templateUrl: './donor-form.html',
  styleUrl: './donor-form.scss'
})
export class DonorForm {
  name = '';
  lat = 0;
  lng = 0;

  constructor(private donorService: DonorService) {
    navigator.geolocation.getCurrentPosition(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    });
  }

  submit() {
    this.donorService.addDonor({ name: this.name, lat: this.lat, lng: this.lng });
  }
}
