import { Component, OnInit } from '@angular/core';
import { BandService } from 'src/app/services/band.service';
import { Band } from '../../models/band';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  bands: Band[] = [];

  constructor(private bandService: BandService) { }

  ngOnInit(): void {
    this.getBands();
  }

  getBands(): void {
    this.bandService.getBands()
      .subscribe(bands => this.bands = bands);
  }



}
