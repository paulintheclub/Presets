import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'aos/dist/aos.css';
import AOS from "aos";
import { register as registerSwiperElements } from 'swiper/element/bundle';
AOS.init();

registerSwiperElements();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

