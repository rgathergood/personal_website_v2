import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { pageRouting } from './pages.routing';

@NgModule({
  declarations: [AboutPageComponent, TimelinePageComponent, ProjectsPageComponent, ContactPageComponent],
  imports: [
    CommonModule, pageRouting
  ]
})
export class PagesModule { }
