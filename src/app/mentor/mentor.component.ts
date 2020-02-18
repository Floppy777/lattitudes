import { Component, OnInit } from '@angular/core';
import { MockMentorService } from "../service/mentor.svc.mock";
import { Mentor } from '../model/mentor.model';
import { Skill } from '../model/skill.model';
import { MentorFilter } from '../pipe/mentor.pipe';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  mentorFilter:MentorFilter;

  mentors: Mentor[];
  skills: Skill[]; 

  constructor(private mockMentorService: MockMentorService) { }

  public onChange(event: any) {
    if(event.target.checked === true){
      this.mentorFilter.skills.push(event.target.value);
    }
    else if(event.target.checked === false) {
      const index = this.mentorFilter.skills.indexOf(event.target.value);
      this.mentorFilter.skills.splice(index,1);
    }
  }

  ngOnInit(): void {
    this.skills = [
      Skill.BACK_END,
      Skill.FRONT_END,
      Skill.MOBILE,
      Skill.DATA,
      Skill.DATA_SCIENCES,
      Skill.ESS,
      Skill.INVEST,
      Skill.BLOCKCHAIN,
      Skill.DEVOPS,
      Skill.DEEP_LEARNING,
      Skill.PRODUCT_OWNER,
      Skill.UX_UI,
      Skill.ENTREPRENARIAT,
      Skill.OTHERS
    ];
    this.mentorFilter = {
      searchText : '' , 
      skills: []
    };
    this.mockMentorService
      .getAllMentor()
      .subscribe(mentors => {
        this.mentors = mentors
        console.log(mentors);
      });
  }

}
