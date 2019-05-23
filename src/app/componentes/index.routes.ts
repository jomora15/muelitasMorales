import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from '../componentes/principal/principal.component';
import { NoticiasComponent } from '../componentes/noticias/noticias.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

export const RUTAS: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'principal' },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
