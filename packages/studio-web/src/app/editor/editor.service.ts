import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ReadAlongSlots } from "../ras.service";

@Injectable({
  providedIn: "root",
})
export class EditorService {
  audioControl$ = new FormControl<File | null>(null, Validators.required);
  rasControl$ = new FormControl<Document | null>(null, Validators.required);
  audioB64Control$ = new FormControl<string | null>(null, Validators.required);
  slots: ReadAlongSlots = {
    title: "Title",
    subtitle: "Subtitle",
  };
  uploadFormGroup = this._formBuilder.group({
    audio: this.audioControl$,
    ras: this.rasControl$,
    audioB64: this.audioB64Control$,
  });
  constructor(private _formBuilder: FormBuilder) {}
}
