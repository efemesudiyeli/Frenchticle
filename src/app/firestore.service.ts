import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, public firebaseAuth: AngularFireAuth) { 

  }

  EpostaParolaKayitOl(eposta, parola){
    return this.firebaseAuth.createUserWithEmailAndPassword(eposta, parola);
  }

  EpostaParolaGiris(eposta, parola){
    return this.firebaseAuth.signInWithEmailAndPassword(eposta, parola);
  }

  sifreSifirla(eposta){
    return this.firebaseAuth.sendPasswordResetEmail(eposta);
  }

  yeniKayit(kayit, user) {
    //return this.firestore.collection('list').add(kayit);
 
     return this.firestore.doc<any>('users/' + user).collection('kelimeler').add(kayit);
   }
 
   kayitlariOku(user) {
     //return this.firestore.collection('kelimeler').snapshotChanges();
     return this.firestore.doc<any>('users/' + user).collection('kelimeler').snapshotChanges();
   }
 
   kayitGuncelle(kayit_id, kayit, user) {
     this.firestore.doc('users/' + user + '/kelimeler/' + kayit_id).update(kayit);
   }
 
   kayitSil(kayit_id,user) {
     this.firestore.doc('users/' + user + '/kelimeler/' + kayit_id).delete();
   }

  dilDonustur(error)
    {
        if(error.code == 'auth/email-already-in-use')
        return 'Eposta adresi kullanılıyor!'
        if(error.code == 'auth/invalid-email')
        return 'Geçersiz eposta adresi!'
        else
        return error.message;
    }

}
