import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-content',
  imports: [ProfileComponent, ExperienceComponent, ProjectsComponent, TestimonialsComponent, EducationComponent, SkillsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
