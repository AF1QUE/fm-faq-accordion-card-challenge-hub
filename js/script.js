const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("show");
      }
    });
    e.currentTarget.classList.toggle("show");
  });
});
