import { Component, ElementRef } from "@angular/core";
import {
  NavController,
  MenuController,
  Platform,
  IonicPage,
  ModalController
} from "ionic-angular";
import { EquipmentInfoPage } from "../equipment-info/equipment-info";
import { SearchPage } from "../search/search";
declare const Konva: any;
declare const Hammer: any;
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  stage;
  containerEl;
  equipmentCode;
  selectedFloor = "F1";
  width = window.innerWidth;
  height = window.innerHeight;
  floors = [
    {
        id:4,name:"F4"
    },
    {
        id:3,name:"F3"
    },
    {
        id:2,name:"F2"
    },
    {
        id:1,name:"F1"
    },
  ];
  f1Data = [
    {
      name: "冰箱",
      code: "F1-01",
      type: "freezer",
      x: 10,
      y: 347,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-02",
      type: "freezer",
      x: -20,
      y: 364,
      width: 40,
      height: 63
    },

    {
      name: "冰箱",
      code: "F1-03",
      type: "freezer",
      x: 217,
      y: 535,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-04",
      type: "freezer",
      x: 247,
      y: 552,
      width: 40,
      height: 63
    },

    // L1-top
    {
      name: "冰箱",
      code: "F1-05",
      type: "freezer",
      x: 127,
      y: 279,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-06",
      type: "freezer",
      x: 157,
      y: 296,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-07",
      type: "freezer",
      x: 186,
      y: 313,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-08",
      type: "freezer",
      x: 216,
      y: 331,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-09",
      type: "freezer",
      x: 246,
      y: 347,
      width: 40,
      height: 63
    },

    // L1-bottom
    {
      name: "冰箱",
      code: "F1-10",
      type: "freezer",
      x: 97,
      y: 296,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-11",
      type: "freezer",
      x: 127,
      y: 313,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-12",
      type: "freezer",
      x: 156,
      y: 331,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-13",
      type: "freezer",
      x: 186,
      y: 347,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-14",
      type: "freezer",
      x: 216,
      y: 364,
      width: 40,
      height: 63,
      flag: "1"
    },
    // R1-top
    {
      name: "冰箱",
      code: "F1-15",
      type: "freezer",
      x: 393,
      y: 435,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-16",
      type: "freezer",
      x: 423,
      y: 450,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-17",
      type: "freezer",
      x: 453,
      y: 467,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-18",
      type: "freezer",
      x: 482,
      y: 484,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-19",
      type: "freezer",
      x: 512,
      y: 501,
      width: 40,
      height: 63,
      flag: "1"
    },
    {
      name: "冰箱",
      code: "F1-20",
      type: "freezer",
      x: 542,
      y: 518,
      width: 40,
      height: 63,
      flag: "1"
    },

    // R1-bottom
    {
      name: "冰箱",
      code: "F1-21",
      type: "freezer",
      x: 363,
      y: 450,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-22",
      type: "freezer",
      x: 393,
      y: 467,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-23",
      type: "freezer",
      x: 423,
      y: 484,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-24",
      type: "freezer",
      x: 452,
      y: 501,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-25",
      type: "freezer",
      x: 482,
      y: 518,
      width: 40,
      height: 63
    },
    {
      name: "冰箱",
      code: "F1-26",
      type: "freezer",
      x: 512,
      y: 535,
      width: 40,
      height: 63
    },

    // L1-冻存罐 top
    {
      name: "冻存罐",
      code: "F1-27",
      type: "pot",
      x: 269,
      y: 206,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-28",
      type: "pot",
      x: 313,
      y: 231,
      width: 51,
      height: 63,
      flag: "1"
    },
    {
      name: "冻存罐",
      code: "F1-29",
      type: "pot",
      x: 358,
      y: 256,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-30",
      type: "pot",
      x: 401,
      y: 282,
      width: 51,
      height: 63
    },
    // L1-冻存罐 bottom
    {
      name: "冻存罐",
      code: "F1-31",
      type: "pot",
      x: 225,
      y: 230,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-32",
      type: "pot",
      x: 270,
      y: 255,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-33",
      type: "pot",
      x: 315,
      y: 281,
      width: 51,
      height: 63,
      flag: "1"
    },
    {
      name: "冻存罐",
      code: "F1-34",
      type: "pot",
      x: 359,
      y: 306,
      width: 51,
      height: 63
    },

    // // R1-冻存罐 top
    {
      name: "冻存罐",
      code: "F1-35",
      type: "pot",
      x: 534,
      y: 360,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-36",
      type: "pot",
      x: 578,
      y: 385,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-37",
      type: "pot",
      x: 623,
      y: 410,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-38",
      type: "pot",
      x: 665,
      y: 436,
      width: 51,
      height: 63
    },
    // R1-冻存罐 bottom
    {
      name: "冻存罐",
      code: "F1-39",
      type: "pot",
      x: 490,
      y: 384,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-40",
      type: "pot",
      x: 535,
      y: 409,
      width: 51,
      height: 63,
      flag: "1"
    },
    {
      name: "冻存罐",
      code: "F1-41",
      type: "pot",
      x: 580,
      y: 435,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-42",
      type: "pot",
      x: 624,
      y: 460,
      width: 51,
      height: 63
    },

    // Lb-冻存罐 top
    {
      name: "冻存罐",
      code: "F1-43",
      type: "pot",
      x: 357,
      y: 153,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-44",
      type: "pot",
      x: 402,
      y: 179,
      width: 51,
      height: 63,
      flag: "1"
    },
    {
      name: "冻存罐",
      code: "F1-45",
      type: "pot",
      x: 446,
      y: 204,
      width: 51,
      height: 63
    },
    // Rb-冻存罐 bottom
    {
      name: "冻存罐",
      code: "F1-46",
      type: "pot",
      x: 578,
      y: 281,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-47",
      type: "pot",
      x: 623,
      y: 307,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-48",
      type: "pot",
      x: 667,
      y: 332,
      width: 51,
      height: 63
    },
    {
      name: "冻存罐",
      code: "F1-49",
      type: "pot",
      x: 712,
      y: 357,
      width: 51,
      height: 63,
      flag: "1"
    },
    {
      name: "冻存罐",
      code: "F1-50",
      type: "pot",
      x: 756,
      y: 383,
      width: 51,
      height: 63
    }
  ];
  layer = new Konva.Layer({
    y: -100
  });
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private el: ElementRef
  ) {}
  search() {
    this.navCtrl.push(SearchPage)
  }
 
  drawFloor(url) {
    this.stage.clear()
    // this.layer.destroy();
    var backgroundImg = new Konva.Image({
      x: -116,
      y: 135,
      width: 1000, //1024*610
      height: 596
    });
    this.layer.add(backgroundImg);
    var imageObj1 = new Image();
    var layer1 = this.layer;
    imageObj1.onload = function() {
      backgroundImg.image(imageObj1);
      layer1.draw();
    };
    imageObj1.src = url;

    this.stage.add(this.layer);
  }
  drawEquipment(f) {
    // this.group.destroy();
    switch (f) {
      case "F1":
        for (var n = 0; n < this.f1Data.length; n++) {
          this.addFreezerImage(this.f1Data[n]);
        }
        break;
      case "F2":
        break;
      case "F3":
        break;
      case "F4":
        break;
    }
    // this.group.draw();
    // this.layer.add(this.group);
    // this.layer.draw();
    // this.stage.add(this.layer);
  }
  addFreezerImage(data) {
    var freezerImg = new Konva.Image({
      x: data.x,
      y: data.y,
      width: data.width,
      height: data.height,
      type: data.type,
      code: data.code
    });
    var imageObj = new Image();

    if (data.type === "freezer") {
      imageObj.src = "/assets/imgs/冰箱2.5D.png";
      if (data.flag === "1") {
        imageObj.src = "/assets/imgs/冰箱2.5D-red2.png";
      }
    } else {
      imageObj.src = "/assets/imgs/冻存罐2.5D.png";
      if (data.flag === "1") {
        imageObj.src = "/assets/imgs/冻存罐2.5D-red.png";
      }
    }
    var layer2 = this.layer;
    imageObj.onload = function() {
      freezerImg.image(imageObj);
      layer2.draw();
    };
    this.layer.add(freezerImg);
    // this.stage.add(this.layer);
  }
  ngOnInit(): void {
    this.containerEl = this.el.nativeElement.querySelector("#container");
    var hammer = new Hammer(this.containerEl);
    this.stage = new Konva.Stage({
      container: "container",
      width: this.width,
      height: this.height,
      draggable: true
    });
    this.drawFloor("/assets/imgs/biobank-f1.svg");
    setTimeout(() => {
      this.drawEquipment(this.selectedFloor);
      this.stage.add(this.layer);
    });

    var self = this;
    this.layer.on("tap", function(evt) {
      console.log(evt.target.attrs.code);
      self.equipmentCode = evt.target.attrs.code;
      if (self.equipmentCode) {
        self.openEquipmentInfoModal();
      }
    });
    // hammer.ontransformstart = function(ev) {
    //   console.log("双指收张开始");
    // }; // 双指收张开始
    // hammer.ontransform = function(ev) {
    //   console.log("双指收张中");
    // }; // 双指收张中
    // hammer.ontransformend = function(ev) {
    //   console.log("双指收张结束");
    // }; // 双指收张结束
  }
  openEquipmentInfoModal() {
    let profileModal = this.modalCtrl.create(EquipmentInfoPage, {
        equipmentCode: this.equipmentCode
    });
    profileModal.present();
  }
  selectFloor(f){
    this.selectedFloor = f;
    var url;
    switch(f){
        case 'F1':
            url = '/assets/imgs/biobank-f1.svg'
            break;
        case "F2":
            url = '/assets/imgs/biobank-f2.svg'
            break;
        case "F3":
            url = '/assets/imgs/biobank-f3.svg'
            break;
        case "F4":
            url = '/assets/imgs/biobank-f4.svg'
            break;
    }
    this.drawFloor(url);
    this.drawEquipment(f); 
}
}
