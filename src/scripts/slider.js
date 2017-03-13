export default class Slider {
  constructor() {
    this.slider = document.querySelector('.js-slider');
    this.sliderWindow = this.slider.querySelector('.js-slider-window');
    this.slides = Array.from(this.slider.querySelectorAll('.js-slider-item'));

    this.setUp();
    this.addPagination();
    this.addEvents();
  }

  setUp() {
    this.slider.classList.add('js-slider-active');
    this.slides[0].classList.add('active');
  }

  addPagination() {
    const pagination = `
      <ul class="pagination">
        ${this.slides.map((item, index) => `<li><a class="pagination__item" data-item="${index}"></a></li>`).join('')}
      </ul>
    `;
    this.sliderWindow.insertAdjacentHTML('afterend', pagination);
  }

  addEvents() {
    this.pagination = document.querySelector('.pagination');
    this.pagination.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('pagination__item')) {
        console.log(Array.from(this.pagination).indexOf(event.target.parentElement));
      }
    });
  }
}
