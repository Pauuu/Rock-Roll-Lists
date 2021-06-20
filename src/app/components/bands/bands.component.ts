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

  /**
   * get all the bands from the start of the page
   */
  ngOnInit(): void {
    this.getBands();
  }

  /**
   * get all the bands
   */
  getBands(): void {
    this.bandService.getBands()
      .subscribe(bands => this.bands = bands);
  }

  /**
   * First deltes the band from the array 
   * Secondly, deletes the band from the db
   * @param band Band to delete
   */
  delete(band: Band): void {
    this.bands = this.bands.filter(b => b !== band);
    this.bandService.deleteBand(band.id).subscribe();
  }

}
