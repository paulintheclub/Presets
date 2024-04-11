import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Preset} from "../models/preset";

@Injectable({
  providedIn: 'root'
})
export class PresetNavigationService {
private presetSource = new BehaviorSubject<Preset | undefined>(undefined);
  currentPreset = this.presetSource.asObservable();

  constructor() { }

  changePreset(preset: Preset) {
    this.presetSource.next(preset);
  }
}
