import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LoginClientPage } from './pages/login-client-page/login-client-page';
import { RegisterClientPage } from './pages/register-client-page/register-client-page';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { PrivateLayout } from './layouts/private-layout/private-layout';
import { ProfilePage } from './pages/profile-page/profile-page';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayout,
        children: [
            {path: 'login', component: LoginClientPage},
            {path: 'register', component: RegisterClientPage},
        ]
    },
    {
        path: '',
        component: PrivateLayout,
        children: [
            {path: 'home', component: HomePage},
            {path: 'profile', component: ProfilePage}
        ]
    }
];
