import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../model/mentor.model';
import { map } from 'rxjs/operators';

Injectable()
export class MockService {

    /* !!!!! DO NOT PUBLISH TO GIT  !!!!! */
    private lattitudeApiKey = "";

    /** Endpoint 
     *  https://api.airtable.com/v0/apptb7HZxY4ojrBaA/Individus
     **/
    private url: string = "https://api.airtable.com/v0/apptb7HZxY4ojrBaA/Individus";
    
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