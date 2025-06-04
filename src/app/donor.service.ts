import { Injectable } from "@angular/core";
import { child, getDatabase, onValue, push, ref, set } from "@angular/fire/database";

@Injectable({ providedIn: 'root' })
export class DonorService {
    db = getDatabase();

    addDonor(donor: any) {
        const id = push(child(ref(this.db), 'donors')).key!;
        return set(ref(this.db, `donors/${id}`), donor);
    }

    getDonors(callback: (data: any) => void) {
        onValue(ref(this.db, 'donors'), (snapshot) => {
            const donors = snapshot.val();
            callback(Object.values(donors || {}));
        });
    }
}
