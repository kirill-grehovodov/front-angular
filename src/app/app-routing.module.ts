import { ProfileRoutingModule } from './../profile/profile-routing.module';
import { AuthRoutingModule } from './../auth/auth-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/shared/components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, ProfileRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
