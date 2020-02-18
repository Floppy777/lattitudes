import { Mentor } from '../model/mentor.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map, flatMap, tap} from 'rxjs/operators';
import { Skill } from '../model/skill.model';

@Injectable()
export class MockMentorService {

    constructor(private httpClient: HttpClient){}

    getAllMentor() : Observable<Mentor[]> {
        return this
            .httpClient
            .get<Mentor[]>("./assets/data.json")
            .pipe(
                map((response: any) => {
                    return response['records'].map( 
                        (record: any) => {
                            let skills = record['fields']['++Compétences'];
                            if(skills === undefined){
                                skills = [];
                            }
                            let mentor = {
                                firstname: record['fields']['!Prénom'],
                                lastname: record['fields']['!Nom'],
                                email: record['fields']['!Email'],
                                fullName: record['fields']['Name'],
                                skills: skills,
                                registeredDate: record['createdTime'],
                            } as Mentor;
                            return mentor;
                        }
                    )
                })
            );
    }

}