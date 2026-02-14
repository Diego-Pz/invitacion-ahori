import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-asking',
  standalone: false,
  templateUrl: './asking.html',
  styleUrl: './asking.scss',
})
export class Asking {
  activo = false;

  tamanioBoton = 0;

  constructor(@Inject(DIALOG_DATA) public data: any,
  private _dialogRef: MatDialogRef<any>,){

  }
  close(){
    this.tamanioBoton = this.tamanioBoton + 1;
  }

  yes(){
    this._dialogRef.close(1);
  }
}
