import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { AccountService } from './services/account/account.service';
import { LoggingService } from './services/logging/logging.service';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './components/pictures/pictures.component';

const appRoutes : Routes = [
  { path: 'pictures', component: PicturesComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'server', component: ServerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    PicturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
