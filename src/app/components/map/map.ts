import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../donor.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map implements OnInit {
  donors: any[] = [];
  center = { lat: -6.2, lng: 106.8 };
  zoom = 10;

  constructor(private donorService: DonorService) { }

  ngOnInit() {
    this.donorService.getDonors((data) => {
      this.donors = data;
    });
  }
}
