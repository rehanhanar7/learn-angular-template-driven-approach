import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleFormComponent } from './sampleform/sampleform.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SampleFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
