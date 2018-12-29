import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './components/pictures/pictures.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';

const routes : Routes = [
  { path: 'pictures', component: PicturesComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'server', component: ServerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
