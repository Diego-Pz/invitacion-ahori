import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Asking } from './asking/asking';
import { Happy } from './happy/happy';

@Component({
  selector: 'app-listado-items',
  standalone: false,
  templateUrl: './listado-items.html',
  styleUrl: './listado-items.scss',
})
export class ListadoItems {
  envelopeSource = 'assets/png/envelope-first.png';
  firstAbrir = false;

  constructor(
    private dialogRef     : MatDialog,
  ){}

  updateEnvelope(){
    this.envelopeSource = `assets/png/envelope.gif?t=${new Date().getTime()}`;
    if (this.firstAbrir) {
      this.openDialog();
    }
    else{
      setTimeout(() => {
        this.openDialog();
        this.firstAbrir = true;
      }, 3000);
    }
    
  }

  openDialog() {
    const dialogRef = this.dialogRef.open(Asking);

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        const dialogIf = this.dialogRef.open(Happy);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
