import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirebaseHttpService {

    carsRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.carsRef = this.db.list('cars-list');
   }

  AddCar(car: any) {
    return this.carsRef.push(car);
  }

  GetAllCars() {
    return this.carsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
      );
  }

  GetCar(id: string) { 
    return  this.db.object('cars-list/' + id);
  }

  GetCarByKey(key: string):any {
    var CarByKeyRef = this.db.list('cars-list/' + key);
    return CarByKeyRef.valueChanges();
}

  updateCar(key:string, item:any):any{
    var CarByKeyRef = this.db.object('cars-list/' + key);
    // return CarByKeyRef.update(key,item)
    return CarByKeyRef.update(item);

  }

  deleteCar(key:string){
    var CarByKeyRef = this.db.object('cars-list/' + key);
    CarByKeyRef.remove()

  }
}