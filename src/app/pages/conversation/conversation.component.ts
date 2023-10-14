import { Component ,OnInit} from '@angular/core'
import {Observable, Subject} from 'rxjs';
import { Title, Meta } from '@angular/platform-browser'
import { WebcamImage } from 'src/app/modules/webcam/domain/webcam-image';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import { WebcamUtil } from 'src/app/modules/webcam/util/webcam.util';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from 'src/app/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/language.service'

@Component({
  selector: 'app-conversation',
  templateUrl: 'conversation.component.html',
  styleUrls: ['conversation.component.css'],
})
export class Conversation implements OnInit {
  constructor(private title: Title, private meta: Meta , private http: HttpClient,public themeService: ThemeService ,public translate: TranslateService,public languageService: LanguageService) {
    this.title.setTitle('conversation - Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'conversation - Soft UI Pro',
      },
    ])
  }
  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.enableLightMode();
    } else {
      this.themeService.enableDarkMode();
    }
  }
  selectedFile = null; 

  onFileSelected(event){
    this.selectedFile=event.target.files[0];  }
     //Send the File to the Server
    //We have the file, to send it to the server, we can use the Angular HttpClient.
    //We can either send the file as a binary or as part of a FormData object - whatever your REST API endpoint supports/ expects
    onUpload(){
     this.http.post('my-backend.com/file-upload', this.selectedFile)
     .subscribe();
      }
  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public facingMode: string = 'environment';
  public messages: any[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    this.readAvailableVideoInputs();
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.messages.push(error);
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      this.addMessage('User denied camera access');
    }
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.addMessage('Received webcam image');
    console.log(webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    this.addMessage('Active device: ' + deviceId);
    this.deviceId = deviceId;
    this.readAvailableVideoInputs();
  }

  addMessage(message: any): void {
    console.log(message);
    this.messages.unshift(message);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }

    return result;
  }

  private readAvailableVideoInputs() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }
  
}
