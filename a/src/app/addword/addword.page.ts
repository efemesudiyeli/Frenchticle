import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-addword',
  templateUrl: './addword.page.html',
  styleUrls: ['./addword.page.scss'],
})
export class AddwordPage implements OnInit {

  constructor(private servis: FirestoreService, private router: Router, public afAuth: AngularFireAuth, HttpClient: HttpClient) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userID = user.uid;
        console.log(this.userID);

      } else {
       
      }
    });
  }

  kayitlar: any;
  word: string;
  meaning: string;
  article: string;
  userID: string;
  
  listele() {
    this.servis.kayitlariOku(this.userID).subscribe(data => {this.kayitlar = data; console.log(data, "datalar"); },  error => {});

}

  yeniKayit() {
    let kayit = {};
    kayit['word'] = this.word;
    kayit['meaning'] = this.meaning;
    kayit['article'] = this.article;

    this.servis.yeniKayit(kayit, this.userID).then(sonuc => {
      this.word = null;
      this.meaning = null;
      this.article = null;
      this.router.navigateByUrl("/kelimeler");
      console.log(sonuc, "Eklendi");
    })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {

  }

  
}