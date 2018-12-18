import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', loadChildren: './page-landing/page-landing.module#PageLandingModule'},
	{ path: 'btcrevolution', loadChildren: './page-bitcoin/page-bitcoin.module#PageBitcoinModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
