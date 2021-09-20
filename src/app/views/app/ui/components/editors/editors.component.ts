import { Component } from '@angular/core';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html'
})
export class EditorsComponent  {

  modulesBubble = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link'],
      ['clean']
    ]
  };

  constructor() { }



}
