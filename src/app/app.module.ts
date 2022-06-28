import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { CreateComponent } from './views/create/create.component';
import { UpdateComponent } from './views/create/update/update.component';
import { HomeComponent } from './views/create/home/home.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { PasswordResetComponent } from './users/password-reset/password-reset.component';
import { DialogComponent } from './views/create/home/dialog/dialog.component';
import { NgMaterialModule } from './ng-material.module';







@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    PasswordResetComponent,
    DialogComponent

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
