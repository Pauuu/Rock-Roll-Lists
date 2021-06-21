import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';
import { BandDetailComponent } from '../band-detail/band-detail.component';

@Component({
  selector: 'app-band-new',
  templateUrl: './band-new.component.html',
  styleUrls: ['./band-new.component.css']
})
export class BandNewComponent implements OnInit {

  constructor(
    private bandService: BandService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  /**
  * Toggles the modification attribute to false
  */
  cancel(): void {
    this.location.back();
  }

  save(name: string, info: string, video?: string): void {

    const bandNew = ({name, info, video} as Band);

    this.bandService.addBand(bandNew).subscribe(
      () => this.location.back()
    );
  }

}
