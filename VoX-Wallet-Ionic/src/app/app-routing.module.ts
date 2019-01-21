import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

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


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomePage },
  { path: 'phone', component: PhonePage },
  { path: 'terms', component: TermsPage },
  { path: 'already', component: AlreadyPage },
  { path: 'seed', component: SeedPage },
  { path: 'confirm', component: ConfirmPage },
  { path: 'details', component: DetailsPage },
  { path: 'code', component: CodePage },
  { path: 'selfie', component: SelfiePage },
  { path: 'address', component: AddressPage }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
