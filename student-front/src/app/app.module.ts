import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './component/student/dashboard/dashboard.component';
import { ServiceService } from './services/service.service';
import { AuthGuard } from './services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AllStuComponent } from './component/admin/all-stu/all-stu.component';
import { AddStuComponent } from './component/admin/add-stu/add-stu.component';
import { StuByIdComponent } from './component/admin/stu-by-id/stu-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AllStuComponent,
    AddStuComponent,
    StuByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ServiceService,authInterceptorProviders,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
