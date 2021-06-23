import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Location } from '@angular/common';


import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  modifying: boolean = false; // if the page it's been modifying or not

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private domSanitazer: DomSanitizer,
    private location: Location
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
   * Goes back to the previous url
   */
  goBack(){
    this.location.back();
  }

  /**
   * Get the specified band
   */
  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id).subscribe(band => this.band = band);
  }

  /**
   * Toggles the modification attribute to true
   */
  modify(): void {
    this.modifying = true;
  }

  /**
   * Toggles the modification attribute to false
   */
  cancel(): void {
    this.modifying = false;
  }

  /**
   * Checks if band has video url and displays.
   * 
   * @returns video sfe url to be displayed
   */
  getEmbedUrl(): SafeResourceUrl {
    if (this.band?.video) {
      return this.domSanitazer.bypassSecurityTrustResourceUrl(
        this.band.video
      );
    }

    return "";
  }

  /**
   * Toggles the modification attribute to false and 
   * updates the band information of the db
   */
  save(): void {
    this.modifying = false;

    if (this.band) {
      this.bandService.modifyBand(this.band)
        .subscribe();
    }
  }

}
