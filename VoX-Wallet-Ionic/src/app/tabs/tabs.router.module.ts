import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ActivityPage } from '../activity/activity.page';
import { DepositPage } from '../deposit/deposit.page';
import { TransferPage } from '../transfer/transfer.page';
import { WithdrawPage } from '../withdraw/withdraw.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(activity:activity)',
        pathMatch: 'full',
      },
      {
        path: 'activity',
        outlet: 'activity',
        component: ActivityPage
      },
      {
        path: 'deposit',
        outlet: 'deposit',
        component: DepositPage
      },
      {
        path: 'transfer',
        outlet: 'transfer',
        component: TransferPage
      },
      {
        path: 'withdraw',
        outlet: 'withdraw',
        component: WithdrawPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(activity:activity)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
