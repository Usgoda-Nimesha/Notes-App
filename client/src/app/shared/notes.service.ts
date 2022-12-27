import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Notes } from './notes.model';

@Injectable({
  providedIn: 'root',
})
// object of model class
export class NotesService {
  // selectedNote!: Notes;
  // notesList!: Notes[];
  selectedNote: Notes = {
    _id: '',
    title: '',
    noteBody: '',
  };
  notesList!: Notes[];
  constructor(private http: HttpClient) {}

  postSaveNotes(note: Notes) {
    return this.http.post(environment.apiBaseUrl + '/notes', note);
  }

  getNotesList() {
    return this.http.get(environment.apiBaseUrl + '/notes');
  }
  putNotes(note: Notes) {
    return this.http.put(environment.apiBaseUrl + `/notes/${note._id}`, note);
  }
  deleteNotes(_id: string) {
    return this.http.delete(environment.apiBaseUrl + `/notes/${_id}`);
  }
}
