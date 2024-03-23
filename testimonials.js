  var sectionData = [
    {
      "block-setting": [
        {
          "author-name": "Kirthi Menon",
          "author-testimonials": "Tried Mapro's Kakhra for the very first time, and I had to stop my kids from munching on them because they are too delicious! This is now without a doubt our go-to evening healthy snack.",
          "author-designation": "Mother of 2",
          "author-img": "https://www.mapro.com/cdn/shop/files/Kirti_Menon.png?v=1666959020&width=1500"
        },
        {
          "author-name": "Manoj Mundhra",
          "author-testimonials": "Love how the company keeps experimenting with new products! Range of Mazaana chocolates are great conversation starters and definitely the star of every party.",
          "author-designation": "Product Manager",
          "author-img": "https://www.mapro.com/cdn/shop/files/654265.jpg?v=1666959598&width=1500"
        },
        {
          "author-name": "Jay Mistry",
          "author-testimonials": "Mazaana is my favourite of all Mapro products. Packaging is superb. The taste of it is so good that I can never stop at just one chocolate.",
          "author-designation": "Founder of Zazzy and Petara",
          "author-img": "https://www.mapro.com/cdn/shop/files/612.jpg?v=1666959629&width=1500"
        }
      ]
    }
  ];

  var testimonialsContainer = document.getElementById('testimonials');
  var carouselInner = document.getElementById('carouselInner');

  sectionData.forEach(section => {
    section['block-setting'].forEach((testimonial, index) => {
      var testimonialDiv = document.createElement('div');
      testimonialDiv.classList.add('testimonial');
      if (index === 0) {
        testimonialDiv.classList.add('active');
      }

      var authorName = document.createElement('p');
      authorName.classList.add('author-name');
      authorName.textContent = testimonial['author-name'];

      var testimonialText = document.createElement('p');
      testimonialText.classList.add('author-text');

      testimonialText.textContent = testimonial['author-testimonials'];

      var authorDesignation = document.createElement('p');
      authorDesignation.classList.add('author-designation');
      authorDesignation.textContent = testimonial['author-designation'];

      testimonialDiv.appendChild(testimonialText);
      testimonialDiv.appendChild(authorName);

      testimonialDiv.appendChild(authorDesignation);

      testimonialsContainer.appendChild(testimonialDiv);

      var carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      carouselItem.setAttribute('data-index', index);
      carouselItem.onclick = function() {
        currentSlide = index;
        updateCarousel();
      };
      var authorImg = document.createElement('img');
      authorImg.src = testimonial['author-img'];
      carouselItem.appendChild(authorImg);
      carouselInner.appendChild(carouselItem);
    });
  });
  var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
  var currentSlide = 0;

  var carouselItems = document.querySelectorAll('.carousel-item');
  var testimonials = document.querySelectorAll('.testimonial');
  var totalSlides = carouselItems.length;
  prevBtn.style.display = 'none';


  function nextSlide() {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
      currentSlide = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = carouselItems.length - 1;
    }
    updateCarousel();
  }



  function updateCarousel() {
    var offset = -currentSlide * carouselItems[0].offsetWidth;
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + offset + 'px)';

  // Show/hide prev/next buttons based on current slide
  if (currentSlide === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currentSlide === totalSlides - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }


    carouselInner.style.transform = 'translateX(' + offset + 'px)';
    testimonials.forEach((testimonial, index) => {
      if (index === currentSlide) {
        testimonial.classList.add('active');
      } else {
        testimonial.classList.remove('active');
      }
    });
  }
  function nextSlide() {
  currentSlide++;
  updateCarousel();
}

function prevSlide() {
  currentSlide--;
  updateCarousel();
}



updateCarousel(); // Call initially to set correct button states

