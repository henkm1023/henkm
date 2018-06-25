import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public name = 'Henk';
  public siteUrl = window.location.href;
  public myId = 'TG';
  public isDisabled = false;
  public isGood = 'text-success';
  public isBad = 'text-danger';
  public isSpecial = 'text-special';
  public hasError = false;
  public anotherColor = 'orange';
  public greeting;
  public clickInfo;
  public clicker = false;
  public displayName = false;
  public date = new Date();
  public classes = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special' : this.isDisabled
  };
  public titleStyles = {
    fontSize: '30px',
    fontStyle: 'italic',
    border: 'solid 20px black',
    width: '300px',
    fontFamily: 'Chiller',
    textDecoration: 'underline',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'grey'
  };

  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Hello yourself');
  }
  onClick (event) {
    console.log('And the button says Hi!');
    console.log(event);
    this.clickInfo = 'pointer position was x:' + event.clientX + ' y:' + event.clientY;
    if (this.clicker === false) {
      this.displayName = true;
      this.clicker = true;
      this.greeting = 'Oh my gosh you clicked me! You actually clicked me! Ohmygoshohmygoshohmygosh!!!! by theway, this was a '
                    + event + ' event';
    } else {
      this.displayName = false;
      this.clicker = false;
      this.greeting = '';
    }
  }
  logMessage(value) {
    this.greeting = value;
  }
}
