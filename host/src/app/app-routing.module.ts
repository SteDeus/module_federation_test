import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     import('mfe1/MfefeatureModule')
  //       .then((m) => m.MfefeatureModule ),
  // },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:5000/mfe1remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './MfefeatureModule'
    })
      .then(m => m.MfefeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
