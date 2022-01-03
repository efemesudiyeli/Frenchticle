import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-kelimeler',
  templateUrl: './kelimeler.page.html',
  styleUrls: ['./kelimeler.page.scss'],
})
export class KelimelerPage implements OnInit {
  
  kayitCount: number;
  kayitlar: any;
  word: string;
  meaning: string;
  article: string;
  userID: string;

  constructor(private servis: FirestoreService, private router: Router, public afAuth: AngularFireAuth) {
    
    console.log("USER ID : ", this.userID);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userID = user.uid;
        console.log(this.userID);
        this.listele();
        
      } else {
        this.router.navigateByUrl('/home');
      }
    });

  }

  

  listele() {
    this.servis.kayitlariOku(this.userID).subscribe(data => {this.kayitlar = data; this.kayitCount = this.kayitlar.length },  error => {});
    
}


  kayitDuzenle(kayit) {
    kayit.guncelleniyor = true;
    kayit.gWord = kayit.payload.doc.data().word;
    kayit.gMeaning = kayit.payload.doc.data().meaning;
    kayit.gArticle = kayit.payload.doc.data().article;
  }

  kayitGuncelle(secilenKayit) {
    let kayit = {};
    kayit['word'] = secilenKayit.gWord;
    kayit['meaning'] = secilenKayit.gMeaning;
    kayit['article'] = secilenKayit.gArticle;
    this.servis.kayitGuncelle(secilenKayit.payload.doc.id, kayit, this.userID);
    secilenKayit.guncelleniyor = false;
  }

  kayitSil(id) {
    this.servis.kayitSil(id, this.userID);
  }

  cikisYap() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/home');
  }
  
    
      
    

  ngOnInit() {
    
  }

  btnLog(){
    console.log("Clicked")
  }

  gitAddWord(){
    this.router.navigateByUrl("/addword");
  }
  
  gitDuzenle(){
    this.router.navigateByUrl("/editword");
  }

 

 

}
