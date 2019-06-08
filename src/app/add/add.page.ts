import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

//Firebase
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public atividade: string = '';

  constructor(private database: AngularFirestore, private navCtrl: NavController) { }

  ngOnInit() {}

  addTask(){
    this.database.collection('tasks').add({ 'name': this.atividade }).then(() => {
      this.navCtrl.pop();
    }, error => {
      console.log("Error", error);
    })
  }

}
