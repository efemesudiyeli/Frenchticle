import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  eposta:string;
  parola:string;
  girisHata:string;

  constructor(private firestoreservis: FirestoreService, private router: Router) { }


  kayitOl() {

    if (!this.eposta) {
      return;
      }


      this.firestoreservis.EpostaParolaKayitOl(this.eposta, this.parola).then(() => this.router.navigateByUrl('/kelimeler')).catch(error => {console.log(error); this.girisHata = this.firestoreservis.dilDonustur(error); } );
        }

  ngOnInit() {
  }

}
