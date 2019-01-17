import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';

import { Web3Module, Web3Service } from './web3';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner  } from '@ionic-native/qr-scanner/ngx';

import { AppComponent } from './app.component';

import { WelcomePage } from './welcome/welcome.page';
import { PhonePage } from './phone/phone.page';
import { TermsPage } from './terms/terms.page';
import { AlreadyPage } from './already/already.page';
import { SeedPage } from './seed/seed.page';
import { ConfirmPage } from './confirm/confirm.page';
import { DetailsPage } from './details/details.page';
import { CodePage } from './code/code.page';
import { SelfiePage } from './selfie/selfie.page';
import { AddressPage } from './address/address.page';

import { SanitizeHtmlPipe } from './sanitizehtml.pipe';

// import { SeedService } from './services/seed.service';

@NgModule({
  declarations: [
    AppComponent, 
    SanitizeHtmlPipe,
    WelcomePage,
    PhonePage,
    TermsPage,
    AlreadyPage,
    SeedPage,
    ConfirmPage,
    DetailsPage,
    CodePage,
    SelfiePage,
    AddressPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(), // { mode: 'ios'}
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    Web3Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    QRScanner,
    Web3Service,
    // SeedService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
