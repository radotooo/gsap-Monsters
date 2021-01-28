import gsap from 'gsap';

export default class Monster {
  constructor(element) {
    this.element = element;
  }
  expand() {
    gsap.to(this.element, {
      width: '80%',
      duration: 0.5,
    });
  }
  contract() {
    gsap.to(this.element, { width: '4%', duration: 0.5 });
  }
  reset() {
    gsap.to('.monster', { width: '16.6%', duration: 0.5 });
  }
}
