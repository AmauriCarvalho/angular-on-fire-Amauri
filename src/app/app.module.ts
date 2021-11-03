import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'firelist', component: FirelistComponent},
    ]),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBYNV56Y6JsGNuEvQ8cQ4F0FVkWMgCTc6E",
        authDomain: "amauricarvalho-81bcc.firebaseapp.com",
        projectId: "amauricarvalho-81bcc",
        storageBucket: "amauricarvalho-81bcc.appspot.com",
        messagingSenderId: "608445049617",
        appId: "1:608445049617:web:f3626dfe218f3f0b6b7ab0"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService ]
})
export class AppModule { }