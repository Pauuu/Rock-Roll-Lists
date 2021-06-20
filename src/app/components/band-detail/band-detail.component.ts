import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { ActivatedRoute } from '@angular/router';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService
  ) { }

  /**
   * Band to be displayed
   */
  @Input() band?: Band;

  /**
   * Displays the band in the page
   */
  ngOnInit(): void {
    this.getBand();
  }

  /**
   * Get the specified band
   */
  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id).subscribe(band => this.band = band);
  }

}
