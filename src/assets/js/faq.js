// FAQ Items Toggle
const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

// FAQ Filter
class FAQFilter {
  constructor() {
    this.filtersSelector = ".cs-option";
    this.FAQselector = ".cs-faq-group";
    this.activeClass = "cs-active";
    this.hiddenClass = "cs-hidden";

    this.filters = document.querySelectorAll(this.filtersSelector);
    this.activeFilter = this.filters[0];
    this.images = document.querySelectorAll(this.FAQselector);

    this.activeFilter.classList.add(this.activeClass);

    for (const filter of this.filters) {
      filter.addEventListener("click", () => this.onClick(filter));
    }
  }

  onClick(filter) {
    this.filter(filter.dataset.filter);
    this.activeFilter.classList.remove(this.activeClass);
    filter.classList.add(this.activeClass);
    this.activeFilter = filter;
  }

  filter(filter) {
    const showAll = filter == "all";
    for (const image of this.images) {
      const show = showAll || image.dataset.category == filter;
      image.classList.toggle(this.hiddenClass, !show);
    }
  }
}

// Initialize FAQ Filter
new FAQFilter();
