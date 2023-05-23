import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  body: string;
  yesNoBtns?: boolean;
}

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.css']
})
export class BasicModalComponent {

  constructor(
    public basicDialog: MatDialogRef<BasicModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  closeDialog(res?: any) {
    this.basicDialog.close(res)
  }

}
