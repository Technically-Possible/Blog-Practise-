import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Echo CONTROL CENTER';
  myStyle = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -900,
    'top': 10,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'color':'#ff0000',
};
myParams = {
  particles: {
      number: {
          value: 200,
      },
       color: {
        value: "#ffffff"
      },
           shape: {
        type: "circle"},
        stroke: {
        width: 200,
        color: "#ffffff"
        },
        polygon: {
          nb_sides: 30
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3.945738208161363,
          random: false,
          anim: {
          enable: false,
          speed: 80,
          size_min: 3,
          sync: false
          }
        },
        line_linked: {
          enable: true,
          color: "#ff9500",
          opacity: 0.8443879765465317,
          width: 1.4204657549380908
        },
}
};
 
    

  inventoryItems: Item[] = []

  marketItems: Item[] = [
    {name: "Hello And welcome to the ISAC terminal", description: "This is the product description"+'\n'+" this is a large test "},
    {name: "Why are you here",  description: "This is the product description"},
  ] 

 
 name = 'Angular 6';
 style: object = {};
 params: object = {
   'interactivity': {
     'detect_on': 'canvas',
     'events': {
       'onhover': {
         'enable': false,
         'mode': 'repulse'
       },
       'resize': true
     }
   }
 };

 width = 100;
 height = 100;
 

}

export interface Transaction {
  item: string;
  cost: number;
}

export interface Item {
  name: string;
  description: string;
   
}
