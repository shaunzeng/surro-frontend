import { Component} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  checkModel: any = { left: false, middle: true, right: false };
  singleModel = '1';
  radioModel = 'Middle';
  uncheckableRadioModel = 'Middle';

  stateButton1CurrentState = '';
  stateButton1ShowMessage = false;
  stateButton1Message = '';
  stateButton1Disabled = false;

  stateButton2CurrentState = '';
  stateButton2ShowMessage = false;
  stateButton2Message = '';
  stateButton2Disabled = false;

  constructor() { }

  onStateButton1Click(): void {
    if (this.stateButton1Disabled) {
      return;
    }
    this.stateButton1Disabled = true;
    this.stateButton1CurrentState = 'show-spinner';
    setTimeout(() => {
      this.stateButton1Message = 'Something is wrong!';
      this.stateButton1CurrentState = 'show-fail';
      this.stateButton1ShowMessage = true;
      setTimeout(() => {
        this.stateButton1CurrentState = '';
        this.stateButton1ShowMessage = false;
        this.stateButton1Disabled = false;
      }, 3000);
    }, 2000);
  }

  onStateButton2Click(): void {
    if (this.stateButton2Disabled) {
      return;
    }
    this.stateButton2Disabled = true;
    this.stateButton2CurrentState = 'show-spinner';
    setTimeout(() => {
      this.stateButton2Message = 'Everything went right!';
      this.stateButton2CurrentState = 'show-success';
      this.stateButton2ShowMessage = true;
      setTimeout(() => {
        this.stateButton2CurrentState = '';
        this.stateButton2ShowMessage = false;
        this.stateButton2Disabled = false;
      }, 3000);
    }, 2000);
  }
}
