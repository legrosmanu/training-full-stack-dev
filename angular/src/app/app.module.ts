import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { AuthGuard } from './services/auth-guard.service';
import { NewDeviceComponent } from './new-device/new-device.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent },
  { path: 'new-device', canActivate: [AuthGuard], component: NewDeviceComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent },
  { path: 'not-found', component: FourofourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourofourComponent,
    NewDeviceComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
