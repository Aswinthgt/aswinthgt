import { Injectable } from '@angular/core';
import { Navigate } from '../../../models/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  events:Partial<Navigate> = {}

  scrollTo(menu: keyof Navigate ){
    const nativeElement = this.events[menu]?.nativeElement;
    nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); 
}

download(uri:string,fileName:string){

  const link = document.createElement('a');
  link.href = uri;
  link.download = fileName;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}



}
