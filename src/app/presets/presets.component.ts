import {Component, HostListener, OnInit,} from '@angular/core';
import {Preset} from "../models/preset";
import {PresetsService} from "../services/presets.service";
import {PresetNavigationService} from "../services/preset-navigation.service";
import {Router} from "@angular/router";
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrl: './presets.component.scss',

})
export class PresetsComponent implements OnInit {
  presets!: Preset[];
  slidesPerView: number = 4;
  screenWidth!: number;

  constructor(private presetNavigationService: PresetNavigationService,
              private presetsService: PresetsService,
              private router: Router
  ) {
  }
  ngOnInit() {
    this.presets = this.presetsService.getPresets().reverse();
  }
onPresetSelected(preset: Preset) {
  this.router.navigate(['/preset-card', preset.id]);
}


  @HostListener("window:resize")
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth< 680){
      this.slidesPerView = 1;
    }
  }


}
