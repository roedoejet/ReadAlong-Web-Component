import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class WcStylingService {
  $wcStyleInput = new BehaviorSubject<string>("");
}
