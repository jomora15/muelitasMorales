import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

import { AgmCoreModule } from '@agm/core';

// Componentes
import { RUTAS } from '../app/componentes/index.routes';
import { BarraSuperiorComponent } from './componentes/compartidos/barra-superior/barra-superior.component';
import { BarraInferiorComponent } from './componentes/compartidos/barra-inferior/barra-inferior.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';

// Servicios
import { NoticiasService } from './services/noticias.service';
import { VideoYoutubePipe } from './pipes/video-youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BarraSuperiorComponent,
    BarraInferiorComponent,
    NoticiasComponent,
    ServiciosComponent,
    ContactenosComponent,
    VideoYoutubePipe
  ],
  imports: [
    RouterModule.forRoot(RUTAS, {useHash: true}),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFY-VoWCam4TxWxwHOfr68lT-GGz6Uobk'
    }), HttpClientModule
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
