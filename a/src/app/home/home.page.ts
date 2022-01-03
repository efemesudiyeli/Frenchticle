import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  eposta: string;
  parola: string;
  girisHata: string;

  constructor(public alertController: AlertController, private firestoreservis: FirestoreService, private router: Router) { }
  login() {

    if (!this.eposta) {
      return;
    }

    this.firestoreservis.EpostaParolaGiris(this.eposta, this.parola).then(() => this.router.navigateByUrl('/kelimeler')).catch(error => { console.log(error); this.girisHata = this.firestoreservis.dilDonustur(error); });
  }

  async sifreHatirlat(eposta): Promise<any> {
    return await this.firestoreservis.sifreSifirla(eposta).then(() => true).catch(() => false);
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Reset your password',
      inputs: [
        {
          name: 'email',
          type: 'text',
          value: this.eposta ? this.eposta : '',
          placeholder: this.eposta ? '' : 'Please enter your email address.'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Vazgeç');
          }
        }, {
          text: 'Confirm',
          handler: (value) => {
            if (value.email.length >= 6) {
              if (this.sifreHatirlat(value.email)) {
                console.log(value.email + ' - email sent.');
              } else {
                console.log('Error.');
              }
            } else {
              console.log('Invalid email address.');
            }

          }
        }
      ]
    });

    await alert.present();
  }


  gitRegister() {
    this.router.navigateByUrl('/register');
  }

}

