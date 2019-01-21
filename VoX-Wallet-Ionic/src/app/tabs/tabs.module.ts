import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ActivityPageModule } from '../activity/activity.module';
import { DepositPageModule } from '../deposit/deposit.module';
import { TransferPageModule } from '../transfer/transfer.module';
import { WithdrawPageModule } from '../withdraw/withdraw.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ActivityPageModule,
    DepositPageModule,
    TransferPageModule,
    WithdrawPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
