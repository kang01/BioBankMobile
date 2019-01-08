import { ViewpdfPage } from './../viewpdf/viewpdf';
import { MonitoringPage } from './../monitoring/monitoring';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@IonicPage()
@Component({
  selector: 'page-equipment-info',
  templateUrl: 'equipment-info.html',
})
export class EquipmentInfoPage {
  selectedSegment= "1";
  equipmentCode;
  //搜索进来得，点击设备进来的
  source;
  fileData = [
    {
      name:'新设备插电测试记录1',
      url:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      memo:'这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注这里...',
      type:'pdf'
    },
    {
      name:'新设备插电测试记录2',
      url:'https://wallpapersite.com/images/pages/pic_w/17068.jpg',
      memo:'这里是备注这里是备注这里是备注这里是备注这里是备注这里是备注这里...',
      type:'jpg'
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    private fileOpener: FileOpener,
    private file: File,
    private transfer: FileTransfer
  ) {
      console.log('UserId', params.get('equipmentCode'));
      this.equipmentCode = params.get('equipmentCode');
      this.source = params.get('source');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentInfoPage');
  }
  goToMonitoring(){
    this.navCtrl.push(MonitoringPage);
  }
  viewFile(file){
    this.download(file.url);
  }
  segmentChanged(event){
    // console.log(event);
  }
  fileTransfer: FileTransferObject = this.transfer.create();
  download(url) {
    var filename =url.split("/").pop();
    console.log(filename);
  // 存在已有得文件夹，然后去判断文件是否存在，否则要创建新得文件夹
    this.validFolder().then((validFolderValue)=>{
        if(validFolderValue){
          this.validFile(filename).then((validFileValue)=>{
            if(validFileValue){
              this.openFile(this.file.externalDataDirectory+this.equipmentCode +'/'+ filename);
            }else{
              this.downFile(url,filename);
            }
          }).catch(err=>{
            this.downFile(url,filename);
          });
        }else{
          this.file.createDir(this.file.externalDataDirectory, this.equipmentCode,false).then(()=>{
            console.log("创建文件夹")
            this.downFile(url,filename);
          })
         
        }
    })
  }
  //  获取文件类型
  
  // 验证文件夹
  validFolder(){
    return this.file.checkDir(this.file.externalDataDirectory,this.equipmentCode).then(()=>{
      return true;
    }).catch(err=>{
      return false;
    })
  }
  // 验证文件
  validFile(filename){
    // var name = filename.split(".").shift();
    return this.file.checkFile(this.file.externalDataDirectory+this.equipmentCode + '/',filename).then(()=>{
      return true;
    }).catch(err=>{
      console.log(err);
      return false;
    });
  }
  // 下载文件
  downFile(url,filename){
    this.fileTransfer.download(url,  this.file.externalDataDirectory+ this.equipmentCode +'/'+ filename,true).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.openFile(entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }
  // 打开文件
  openFile(path){
    var mineType = this.getFileMimeType(path.substring(path.lastIndexOf(".")+1,path.length));
    console.log(mineType);
    this.fileOpener.open(path, mineType)
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
  }
  getFileMimeType(fileType){
    let mimeType: string = '';
  
    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

}
