import { Component, OnInit } from '@angular/core';
import { Observable, Subject, } from 'rxjs';
import { switchMap, distinctUntilChanged } from 'rxjs/operators';

import { BandService } from '../../services/band.service';
import { Band } from '../../models/band'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private searchText = new Subject<string>();
  bands$!: Observable<Band[]>;

  constructor(private bandService: BandService) { }

  /**
   * Searches the bands that matches the input text
   */
  ngOnInit(): void {
    this.bands$ = this.searchText.pipe(
      // ignores new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the text has changed
      switchMap((text: string) => this.bandService.searchBands(text)),
    );
  }

  /**
   * Searches the name of the band
   * @param text Name of the band
   */
  search(text: string): void {
    this.searchText.next(text);
  }

}
