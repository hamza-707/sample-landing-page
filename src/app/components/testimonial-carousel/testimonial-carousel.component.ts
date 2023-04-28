import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
})
export class TestimonialCarouselComponent {
  testimonials: any[] = [
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis mollitia, dolore libero totam labore quos maiores, doloremque, commodi ex illum sint consectetur perspiciatis architecto. Eius qui nostrum optio aliquid atque.',
      author: 'John Doe',
    },
    {
      text: 'This is an incredible Gym with all the best facilities available',
      author: 'Mark Roberts',
    },
    {
      text: 'A wonderful and life-changing experience for me. Great bunch of trainers. 10/10 from me',
      author: 'Julia Morgan',
    },
  ];
  selectedIndex = 1;
  selectedTestimonial = this.testimonials[1];

  move(direction: string) {
    if (direction === 'forward') {
      if (this.selectedIndex === this.testimonials.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex += 1;
      }
      const slider = document.getElementById('slider');
      slider?.classList.add('opacity-change');
      this.selectedTestimonial = this.testimonials[this.selectedIndex];
      setTimeout(() => {
        slider?.classList.remove('opacity-change');
      }, 800);
    } else {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.testimonials.length - 1;
      } else {
        this.selectedIndex -= 1;
      }
      const slider = document.getElementById('slider');
      slider?.classList.add('opacity-change');
      this.selectedTestimonial = this.testimonials[this.selectedIndex];
      setTimeout(() => {
        slider?.classList.remove('opacity-change');
      }, 800);
    }
  }
}
