import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class User {
  public title: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public email: string;
  public phone: string;
  public account: any;

  constructor(properties: {
    title?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
    phone?: string;
    account?: string;
  }) {
    this.title = properties.title || 'Mr';
    this.firstName = properties.firstName || '';
    this.lastName = properties.lastName || '';
    this.dateOfBirth = properties.dateOfBirth || '';
    this.email = properties.email || '';
    this.phone = properties.phone || '';
    this.account = properties.account || {};
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: Storage) { }

  loadUserData() {
    this.storage.get('currentUser').then((val) => {
      console.log('loadUserData - currentUser', val);
    });
  }

  isAuthenticated(): any {
    this.storage.get('currentUser').then((val) => {
    console.log('isAuthenticated', val !== null);
    return val !== null;
    });
  }

  saveUser(userModel: User) {
    console.log('saveUser - userModel', JSON.stringify(userModel));
    if (userModel) {
      const tmpModel = userModel;
      console.log('saveUser - tmpModel before', JSON.stringify(tmpModel));

      this.storage.get('currentUser').then ((val) => {
        if (val) {
          for (const key of Object.keys(val)) {
            if (!tmpModel[key]) {
              tmpModel[key] = val[key];
            }
          }
        }
      });
      this.storage.set('currentUser', tmpModel);
      console.log('saveUser - tmpModel after', JSON.stringify(tmpModel));
    }
  }
}
