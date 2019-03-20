import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ModuleWithProviders } from '@angular/core';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';

export const routes: Routes = [
  { path: '', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'timeline', component: TimelinePageComponent },
  { path: '**', component: AboutPageComponent },
];

export const pageRouting: ModuleWithProviders = RouterModule.forChild(routes);
