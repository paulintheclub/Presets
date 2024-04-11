import {Injectable, OnInit} from '@angular/core';
import {Preset} from "../models/preset";

@Injectable({
  providedIn: 'root'
})
export class PresetsService{


  private presets: Preset[] = [
    {
      id: 1,
      imageAfter: 'https://i.imgur.com/P4xr6K3.jpg',
      imageBefore:'https://i.imgur.com/1VSNwiD.jpg',
      name: 'VividSnap Preset',
      description: 'Custom Photography',
      price: 1
    },
    {
      id: 2,
      imageAfter: 'https://i.imgur.com/svQRzH6.jpg',
      imageBefore:'https://i.imgur.com/xq17bgB.jpg',
      name: 'Creative Photo Sessions',
      description: 'Unique Angle Captures',
      price: 54
    },
        {
      id: 3,
      imageAfter: 'https://i.imgur.com/bro7l7F.jpg',
      imageBefore:'https://i.imgur.com/bro7l7F.jpg',
      name: 'Iconic Landscapes',
      description: 'Personalized Photoshoots',
      price: 78
    },
        {
      id: 4,
      imageAfter: 'https://i.imgur.com/Yo2NQly.jpg',
      imageBefore:'https://i.imgur.com/zqBXiJF.jpg',
      name: 'Exclusive Portfolios',
      description: 'Photography Technique',
      price: 35,
      fullDescription: 'VividSnap is a photo editing preset designed for Adobe Lightroom Mobile and Desktop applications. It brings out the vibrancy and clarity in everyday photography, enhancing colors, boosting contrasts, and refining details. This preset is perfect for urban landscapes, architecture, and street photography where you want to highlight textures and depth within the scene. With one click, VividSnap turns your images into eye-catching works of art.'
    },
    {
      id: 5,
      imageAfter: 'https://i.imgur.com/2BlcE3h.jpg',
      imageBefore:'https://i.imgur.com/mhLWkrX.jpg',
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
