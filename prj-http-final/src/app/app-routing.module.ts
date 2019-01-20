import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'not-found', component: ErrorPageComponent, data:{ errormessage: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },//last-one
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
