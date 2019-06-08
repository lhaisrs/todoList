import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

//Firebase
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public tasks: Observable<any[]>;

  constructor(private navCtrl: NavController, private db: AngularFirestore) { }

  ngOnInit() {
    this.getTasks();
  }

  goToAddTaks(){
    this.navCtrl.navigateForward('add');
  }

  getTasks(){
    this.tasks = this.db.collection<any>('tasks').valueChanges();
  }

}
