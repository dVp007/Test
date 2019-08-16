import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  constructor(private enrollment: EnrollmentService) { }
  ngOnInit() {}
  upload(Efile) {
    console.log(Efile.target.files[0]);
    const ufile = Efile.target.files[0];
    this.enrollment.uploadFile( ufile ).subscribe(
    filed => {
        console.log( filed );
      }
    )
  }
}
