import {Injectable, OnInit} from '@angular/core';
import {Preset} from "../models/preset";

@Injectable({
  providedIn: 'root'
})
export class PresetsService{


  private presets: Preset[] = [
    {
      id: 1,
      imageAfter: '/assets/1213-after.jpg',
      imageBefore:'/assets/1213-before.jpg',
      name: 'VividSnap Preset',
      description: 'Custom Photography',
      price: 1
    },
    {
      id: 2,
      imageAfter: '/assets/1894-after.jpg',
      imageBefore:'/assets/1894-before.jpg',
      name: 'Creative Photo Sessions',
      description: 'Unique Angle Captures',
      price: 54
    },
        {
      id: 3,
      imageAfter: '/assets/2763-after.jpg',
      imageBefore:'/assets/2763-before.jpg',
      name: 'Iconic Landscapes',
      description: 'Personalized Photoshoots',
      price: 78
    },
        {
      id: 4,
      imageAfter: '/assets/3090-after.jpg',
      imageBefore:'/assets/3090-before.jpg',
      name: 'Exclusive Portfolios',
      description: 'Photography Technique',
      price: 35,
      fullDescription: 'VividSnap is a photo editing preset designed for Adobe Lightroom Mobile and Desktop applications. It brings out the vibrancy and clarity in everyday photography, enhancing colors, boosting contrasts, and refining details. This preset is perfect for urban landscapes, architecture, and street photography where you want to highlight textures and depth within the scene. With one click, VividSnap turns your images into eye-catching works of art.'
    },
    {
      id: 5,
      imageAfter: '/assets/1959-after.jpg',
      imageBefore:'/assets/1959-before.jpg',
      name: 'One building',
      description: 'Photography Wow',
      price: 15,
      fullDescription: 'VividSnap is a photo editing preset designed for Adobe Lightroom Mobile and Desktop applications. It brings out the vibrancy and clarity in everyday photography, enhancing colors, boosting contrasts, and refining details. This preset is perfect for urban landscapes, architecture, and street photography where you want to highlight textures and depth within the scene. With one click, VividSnap turns your images into eye-catching works of art.'
    }
  ]
    getPresets() {
    return this.presets.slice();
  }
getPresetById(id: number): Preset | undefined {
  return this.presets.find(p => p.id === id);
  }
}
