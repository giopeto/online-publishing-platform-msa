import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './modules/articles/article.component';
import { RatingsComponent } from './modules/ratings/ratings.component';

import { ArticlesService } from './core/services/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
