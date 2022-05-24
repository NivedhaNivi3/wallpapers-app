import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjxComponent } from './rxjx/rxjx.component';
import { FlexComponent } from './flex/flex.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RxjxComponent,
    FlexComponent,
    WallpaperComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
