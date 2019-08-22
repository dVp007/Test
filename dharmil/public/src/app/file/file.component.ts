import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  constructor(private enrollment: EnrollmentService) { }
  fileToUpload: File = null;
  ngOnInit() {}
  upload( files: File ) {
    const fd = new FormData();
    console.log(files.name);
    fd.append('file', files, files.name);
    console.log(fd);
    this.enrollment.uploadFile(fd).subscribe(
      events => {
        if ( events.type === HttpEventType.UploadProgress) {
          console.log ('Upload Progress: ' + Math.round(events.loaded / events.total * 100) + '%');
        } else if ( events.type === HttpEventType.Response) {
          console.log(events);
        }
      }
    );
  }
}
