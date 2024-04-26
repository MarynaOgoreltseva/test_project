

$('#slider1').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
      },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: 'unslick'
    }
  ]
});

$('#slider2').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
        slidesToScroll: 1,
     responsive: [
        {
           breakpoint: 375,
           settings: "unslick"
        }
     ]
  });
