// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Services
import { InMemoryDataService } from './services/in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BandNewComponent } from './components/band-new/band-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    BandDetailComponent,
    SearchBarComponent,
    BandNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
