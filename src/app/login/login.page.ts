import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = '';
  public senha: string = '';

  constructor(private auth: AngularFireAuth, private navCtrl: NavController) { }

  ngOnInit() {}

  login() {
    this.auth.auth.signInWithEmailAndPassword(this.email, this.senha).then(() => {
      this.navCtrl.navigateRoot('home');
    }, err => {
      console.log("Error", err);
    })
  }

}
