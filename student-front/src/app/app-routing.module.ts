import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStuComponent } from './component/admin/add-stu/add-stu.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { AllStuComponent } from './component/admin/all-stu/all-stu.component';
import { StuByIdComponent } from './component/admin/stu-by-id/stu-by-id.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/student/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { StudentGuard } from './services/student.guard';

const routes: Routes = 
[
  
  {
    path:"login",
    component:LoginComponent
  },
  // {
  //   path:"dashboard",
  //   component:DashboardComponent,
  //   canActivate:[AuthGuard]
  // },
  {
    path:'admin',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard,AuthGuard]
  },
  {
    path:'student',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[StudentGuard]
  },
  {
    path:'all',
    component:AllStuComponent,
    pathMatch:'full',
    canActivate:[AdminGuard,AuthGuard]
  },
  {
    path:'add',
    component:AddStuComponent,
    pathMatch:'full',
    canActivate:[AdminGuard,AuthGuard]
  },
  {
    path:'get/:id',
    component:StuByIdComponent,
    pathMatch:'full',
    canActivate:[AdminGuard,AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
