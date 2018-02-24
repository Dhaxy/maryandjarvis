import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getShoppingItems(path) {
    return this.afd.list(path);
  }

  addItem(name, path) {
    this.afd.list(path).push(name);
  }

  removeItem(id, path) {
    this.afd.list(path).remove(id);
  }
}

