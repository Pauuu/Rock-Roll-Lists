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

  @Input() band?: Band;

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bandService.getBand(id).subscribe(band => this.band = band);
  }

}
