import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  /*profileForm = this.fb.group({
    name: ['', Validators.required],
    password: [''],
    email: [''],
    subjects: this.fb.array([
      this.fb.control('')
    ])
  });*/

  /*get subjects() {
    return this.profileForm.get('aliases') as FormArray;
  }*/

  constructor() { }
  ngOnInit() { }

  /*addSubject() {
    this.subjects.push(this.fb.control(''));
  }*/
}
