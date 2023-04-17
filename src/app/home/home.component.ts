import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  title = 'matrimony-profile';
  imagevalue:any
  hansiimage:any=[]

  showImage = true;

  
store =[
 { img : 'assets/img/hansika -pic.jpg',
   name: "Priyanka",
   age: "28yrs",
   about: "5ft 2 inch, Tamil, Nair, MBBS , Doctor, Chennai, TamilNadu"
},
  {img :'assets/img/jenifer-lawrence.jpg',
  name: "Amirtha",
  about: "25 yrs,4ft 3 inch, Tamil, Catholic, BHMS , Doctor, Chennai, TamilNadu"
},
  {img: 'assets/img/Priyanka-chopra-gesf-2018-7565.jpg',
  name: "Sweatha",
  about: "4ft 2 inch, Tamil, Nair, BE , Software Developer, Chennai, TamilNadu"
},
  {img: 'assets/img/anupama.jpg',
  name: "Babi",
  about: "5ft 5 inch, Tamil, Nair, B.ED, Teacher, Chennai, TamilNadu"
},
  {img: 'assets/img/trisha.avif',
  name: "Prasanna",
  about: "5ft 2 inch, Tamil, Nair, BL, Lawyer , Chennai, TamilNadu"
}
]


  constructor(public  http: HttpClient, public router: Router) {
    this.storeimage();
  }

  data:any=[];

  ngOnInit(): void {
  }

  storeimage(){
   
    this.store.forEach((res:any)=>{
      this.http.get(res.img, { responseType: 'blob' })
      .subscribe(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          this.data.push(base64String)
          console.log(this.store)
        };
        reader.readAsDataURL(blob);
      });
    })
    this.store.map((res:any)=>{
      this.data.forEach((res:any)=>{
        res.img=res
      })
    })
  }
  

  cursor(){
    this.router.navigate(["gesture"])
   }

   removeImage(data:any){
    console.log(data)
    this.store.splice(data, 1)
    
   }

   profile(){
    this.router.navigate(["profile"])
   }
}
