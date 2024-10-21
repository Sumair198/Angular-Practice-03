import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'practice-3';

  constructor(private viewConatiner: ViewContainerRef, private cfr: ComponentFactoryResolver) {
    //initialazing properties
    //dependency injection code
    //event listener code
    // console.log('constructor')
  }

  // ngOnInit() {
  //   //initialazing properties
  //   //event listener code
  //   //initial api call
  //   // console.log('ngOnInit')
  // }
 
 

  async adminLoad() {
    this.viewConatiner.clear();
    const { AdminlistComponent } = await import('./adminlist/adminlist.component');
    this.viewConatiner.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async userLoad() {
    this.viewConatiner.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component')
    this.viewConatiner.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
  UserValues(val: any) {
    console.log(val)
  }

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  loginUser() {
    console.log(this.loginform.value)
  }
  get user() {
    return this.loginform.get('username')
  }
  get pass() {
    return this.loginform.get('password')
  }
  obj = {
    username: 'Sumair',
    password: '1234567890',
  }
  userName: string = 'John Doe';


  isDisabled: boolean = false;

  onBlur() {
    this.isDisabled = true;
  }
  isActive: boolean = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
  @ViewChild('myDiv') myDiv!: ElementRef;
  // ngAfterViewInit(): void {
  //   // Accessing and manipulating the DOM element after the view has initialized
  //   this.myDiv.nativeElement.style.backgroundColor = 'lightblue';
  //   this.myDiv.nativeElement.innerText = 'This text is set by ngAfterViewInit';
  // }

  // chnageInp(evt : Event)
  // {
  //   const inp = (evt.target as HTMLInputElement).value
  //   console.log(inp)
  // }

  inpVal = 'test'
  // getVal(e : any)
  // {
  //   this.inpVal  = e
  // }

  parentComponent(data: any) {
    console.log(data)
  }

  phoneNumber = 3353236375

  showChild = true;

  destroyChild() {
    this.showChild = false;
  }
  @ViewChild('myHeading') heading! : ElementRef;
  ngAfterViewInit(){
    console.log(this.heading.nativeElement.textContent)
  }

}
