import { AboutComponent } from './about/about.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FIRESTORE_CONFIG } from './firestore.config';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridComponent,
    TimelineComponent,
    ContactFormComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(FIRESTORE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
