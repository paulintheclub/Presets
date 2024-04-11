import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss'
})
export class GuideComponent implements OnInit{
  showMobile = true;
    ngOnInit() {
    AOS.init();
  }

  toggleDevices() {
    this.showMobile = !this.showMobile;
    AOS.refresh();
  }

}
