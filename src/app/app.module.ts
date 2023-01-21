import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideDatabase,getDatabase, connectDatabaseEmulator } from '@angular/fire/database';
import { provideFirestore,getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions,getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { provideStorage,getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

console.log('woot');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      // const firebaseApp = getApp('firePrint');
      const auth = getAuth();
      if(environment.useEmulator){
        console.log(1);
        connectAuthEmulator(auth, "http://localhost:9099", {disableWarnings: false});
      }
      return auth;
    }),
    provideDatabase(() => {
      const db = getDatabase();
      if(environment.useEmulator){
        connectDatabaseEmulator(db, 'localhost', 9000);
      }
      return db;
    }),
    provideFirestore(() => {
      const db = getFirestore();
      if(environment.useEmulator){
        connectFirestoreEmulator(db, 'localhost', 8080); 
      }
      return db;
    }),
    provideFunctions(() => { 
      const functions = getFunctions();
      if(environment.useEmulator){
        connectFunctionsEmulator(functions, "localhost", 6021);
      }
      return functions;
    }),
    provideStorage(() => { 
      const storage = getStorage();
      if(environment.useEmulator){
        connectStorageEmulator(storage, "localhost", 9199);
      }
      return storage 
    }),
    provideAnalytics(() => { return getAnalytics()}),
    provideMessaging(() => { return getMessaging()}),
    providePerformance(() => { return getPerformance() }),
    provideRemoteConfig(() => { return getRemoteConfig() }),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
