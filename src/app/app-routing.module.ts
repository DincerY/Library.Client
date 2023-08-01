import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { BooksComponent } from './admin/components/books/books.component';
import { AuthGuard } from './guards/common/auth.guard';
import { WaitGuard } from './guards/common/wait.guard';

const routes: Routes = [
  {
    path:"admin",
    component:LayoutComponent,
    children:[
      {path:"books",
      loadChildren: ()=> import("./admin/components/books/books.module").then(
        module => module.BooksModule
      ),canActivate: [AuthGuard]
    },
      {
        path:"libraries",
        loadChildren:()=> import("./admin/components/libraries/libraries.module").then(
          module => module.LibrariesModule
        ),canActivate: [AuthGuard]
      }
    ], canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    loadChildren: ()=> import("./ui/books/books.module").then(
      module => module.BooksModule
    ),resolve:{books : WaitGuard}
  },
  {
    path:"login",
    loadChildren:()=> import("./ui/login/login.module").then(
      module => module.LoginModule
    )
  },
  {
    path:"register",
    loadChildren:()=> import("./ui/register/register.module").then(
      module => module.RegisterModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
