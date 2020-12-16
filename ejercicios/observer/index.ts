interface Observer {
  update: (data: any) => void
}

interface Subject {
  subscribe: (observer: Observer) => void,
  unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
  
  observers: Array<Observer> = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value')
    el.addEventListener('input', () => {
      this.notify(el.value);
    })
  }

  subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer: Observer) {
    const i = this.observers.indexOf(observer);
    this.observers.splice(i, 1);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLLIElement;

  constructor() {
    this.el = document.querySelector("#price")
  }

  update(data: any){
    this.el.innerText = data;
  }
}


// All it is required to create a subscription;
const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);


// Unsubscribe:
const button = document.querySelector("#button");

button.addEventListener('click', () => {
  value.unsubscribe(display);
})