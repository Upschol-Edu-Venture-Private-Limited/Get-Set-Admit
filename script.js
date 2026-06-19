const { API_URL, AWS_S3_HOST } = window.env;
console.log(API_URL, AWS_S3_HOST)
function login() {
  window.location.href = "/app/login";
}

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", login);


// Career Tab
let careerTabItemsData = [
  {
    id: 1,
    title: "Students",
    content: {
      title: "Students and their families depend on GSA to:",
      list: [
        "Get reliable, objective information and guidance about study destinations, courses, and colleges and universities globally using a single platform.",
        "Discover their right-fit places of study for higher education based on their individual preferences, career aspirations and financial considerations.",
        "Collaborate closely with their high school counselors or GSA Student Education Advisors to plan their college path and discover scholarship opportunities.",
      ],
      imageData: {
        backgroundImage: "url('./assets/career-bg.svg');",
        image: "./assets/student-tab-img.png",
        imageAlt: "For Students",
      },
    },
    hrefLink: "/#",
  },
  {
    id: 2,
    title: "Schools & Counsellors",
    content: {
      title:
        "Counsellors and school leaders at the world’s best schools trust GSA to:",
      list: [
        "Simplify college research and application processes for their students.",
        "Improve engagement with students and guardians, power their counseling strategy using data-backed insights and improve student outcomes.",
        "Save time spent in doing adminstrative work with streamlined workflows for managing student applications and documents.",
      ],
      imageData: {
        backgroundImage: "none",
        image: "./assets/school-tab-img.png",
        imageAlt: "For Schools & Counsellors",
      },
    },
    hrefLink: "/#",
  },
  {
    id: 3,
    title: "Universities",
    content: {
      title: "Leading higher education institutions globally work with GSA to:",
      list: [
        "Refine their international strategy with powerful, trusted, real-time insights and support from GSA with years of admissions experience.",
        "Build strong, long-term relationships with right-fit students, their counselors and families in the right place at the right time.",
        "Form a more diverse and inclusive class.",
      ],
      imageData: {
        backgroundImage: "none",
        image: "./assets/universities-tab-img.png",
        imageAlt: "For Universities",
      },
    },
    hrefLink: "/#",
  },
];

const careerTabButtonContainer = document.getElementById(
  "career-tab-button-container"
);
const careerTabContent = document.getElementById("career-tab-content");
careerTabContent.innerHTML = `
  <div
  class="justify-self-center md:justify-self-start order-2 md:order-1"
  >
  <h3 class="text-base lg:text-xl font-semibold tab-content-heading">
    ${careerTabItemsData[0].content.title}
  </h3>
  <div class="tab-content-list-container">
      <!-- list items -->
  </div>
  <a class="cursor-pointer tab-content-href">
    <h4 class="text-primary font-semibold text-xs lg:text-sm mt-4">
      Read More
    </h4>
  </a>
  </div>
  <div
  class="flex justify-center items-center order-1 md:order-2 image-wrapper"
  >
  <div
    class="p-8 tab-img-bg"
    style="
      background-image: ${careerTabItemsData[0].content.imageData.backgroundImage}
      background-size: contain;
      background-repeat: no-repeat;
    "
  >
    <img
      src=${careerTabItemsData[0].content.imageData.image}
      alt=${careerTabItemsData[0].content.imageData.imageAlt}
      class="lg:max-h-96 max-h-80 object-contain tab-img"
    />
  </div>
  </div>
  `;

const careerListContainer = careerTabContent.querySelector(
  ".tab-content-list-container"
);
careerTabItemsData[0].content.list.forEach((item) => {
  const listItem = document.createElement("div");
  listItem.classList.add("flex", "space-x-3", "mt-5");
  listItem.innerHTML = `
      <i class="fas fa-check text-primary"></i>
      <p class="font-light text-secondary">
          ${item}
      </p>
      `;
  careerListContainer.appendChild(listItem);
});

careerTabItemsData.forEach((item, index) => {
  const tabButton = document.createElement("div");
  tabButton.classList.add(
    "tab-button",
    "flex-1",
    "flex",
    "items-center",
    "justify-center",
    "p-3"
  );
  if (index === 0) {
    tabButton.classList.add("tab-button-active");
  }
  tabButton.innerHTML = `<h3 class="cursor-pointer font-semibold text-center text-lg lg:text-xl my-auto">${item.title}</h3>`;
  const tabButtonH3 = tabButton.querySelector("h3");
  tabButtonH3.addEventListener("click", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("tab-button-active");
    });
    tabButton.classList.add("tab-button-active");
    // Set tab heading
    const tabContentHeading = careerTabContent.querySelector(".tab-content-heading");
    tabContentHeading.innerText = item.content.title;
    // Set tab list items
    const tabContentListContainer = careerTabContent.querySelector(".tab-content-list-container");
    tabContentListContainer.innerHTML = "";
    item.content.list.forEach((listItem) => {
      const listItemElement = document.createElement("div");
      listItemElement.classList.add("flex", "space-x-3", "mt-5");
      listItemElement.innerHTML = `
          <i class="fas fa-check text-primary"></i>
          <p class="font-light text-secondary">
              ${listItem}
          </p>`;
      tabContentListContainer.appendChild(listItemElement);
    });
    // Set tab href
    const tabContentHref = careerTabContent.querySelector(".tab-content-href");
    tabContentHref.setAttribute("href", item.hrefLink);
    // Set tab image
    const tabImage = careerTabContent.querySelector(".tab-img");
    tabImage.setAttribute("src", item.content.imageData.image);
    tabImage.setAttribute("alt", item.content.imageData.imageAlt);
    // Set tab background image
    const tabImgBg = careerTabContent.querySelector(".tab-img-bg");
    tabImgBg.style.backgroundImage = item.content.imageData.backgroundImage;
  });
  careerTabButtonContainer.appendChild(tabButton);
});

// Testimonial Slider
const testimonialData = [
  {
    authorImg: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    authorName: "Jacob Jones",
    heading: "Best Admission App",
    description: "Student reviews illuminate the excellence of our college admission website, showcasing its effectiveness in streamlining the application process and offering valuable insights. These authentic testimonials bear witness to the success stories and transformative journeys of students who have found their dream colleges through our platform.",
    rating: 5,
  },
  {
    authorImg: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    authorName: " Miller K",
    heading: "Worth the wait",
    description: "Student reviews illuminate the excellence of our college admission website, showcasing its effectiveness in streamlining the application process and offering valuable insights. These authentic testimonials bear witness to the success stories and transformative journeys of students who have found their dream colleges through our platform.",
    rating: 4,
  },
  {
    authorImg: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    authorName: "Sachin J",
    heading: "Great for students",
    description: "Student reviews illuminate the excellence of our college admission website, showcasing its effectiveness in streamlining the application process and offering valuable insights. These authentic testimonials bear witness to the success stories and transformative journeys of students who have found their dream colleges through our platform.",
    rating: 2,
  },
  {
    authorImg: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    authorName: "Henry R",
    heading: "Reduces the stress",
    description: "Student reviews illuminate the excellence of our college admission website, showcasing its effectiveness in streamlining the application process and offering valuable insights. These authentic testimonials bear witness to the success stories and transformative journeys of students who have found their dream colleges through our platform.",
    rating: 3,
  },
];

const testimonialSliderContainer = document.getElementById("testimonial-slider-container");
testimonialData.forEach((testimonial, index) => {
  const testimonialElement = document.createElement("div");
  testimonialElement.classList.add("testimonial-card", "bg-white", "p-4");
  if (index === 0) {
    testimonialElement.classList.add("testimonial-card-active");
  }
  testimonialElement.innerHTML = `
  <img
    src="${testimonial.authorImg}"
    alt="${testimonial.authorName}"
    class="w-16 h-16 object-cover rounded-full"
  />
  <h3 class="text-lg lg:text-xl text-black font-semibold">
    ${testimonial.heading}
  </h3>
  <p class="text-sm lg:text-base text-secondary mt-2">
    ${testimonial.description}
  </p>
  <h4 class="text-sm lg:text-base text-black font-semibold mt-4">
    ${testimonial.authorName}
  </h4>
  <div class="flex items-center justify-between mt-1">
    <div id="testimonial-rating-container" class="flex items-center space-x-2">
      
    </div>
    <div class="flex items-center space-x-4">
      <svg
        class="w-8 h-8 cursor-pointer"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="testimonial-left-arrow"
      >
        <rect width="32" height="32" rx="16" fill="#E8EDFF" />
        <path
          d="M19.3105 22.6205L12.6899 15.9998L19.3105 9.37915"
          stroke="#3775EE"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        class="w-8 h-8 cursor-pointer"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="testimonial-right-arrow"
      >
        <rect width="32" height="32" rx="16" fill="#E8EDFF" />
        <path
          d="M12.6895 9.37911L19.3101 15.9998L12.6895 22.6205"
          stroke="#3775EE"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  `;
  const ratingContainer = testimonialElement.querySelector("#testimonial-rating-container");
  for (let i = 0; i < testimonial.rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fas", "fa-star", "text-primary");
    ratingContainer.appendChild(star);
  }
  const testimonialLeftArrow = testimonialElement.querySelector("#testimonial-left-arrow");
  const testimonialRightArrow = testimonialElement.querySelector("#testimonial-right-arrow");

  testimonialLeftArrow.addEventListener("click", () => {
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    testimonialCards.forEach((testimonialCard) => {
      testimonialCard.classList.remove("testimonial-card-active");
    });
    const newIndex = (index - 1 + testimonialCards.length) % testimonialCards.length;
    testimonialCards[newIndex].classList.add("testimonial-card-active");
    testimonialCards[newIndex].style.animation = "slideFromRight 0.5s ease-in-out";
    setTimeout(() => {
      testimonialCards[newIndex].style.animation = "";
    }, 500);
  })
  testimonialRightArrow.addEventListener("click", () => {
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    testimonialCards.forEach((testimonialCard) => {
      testimonialCard.classList.remove("testimonial-card-active");
    });
    const newIndex = (index + 1) % testimonialCards.length;
    testimonialCards[newIndex].classList.add("testimonial-card-active");
    testimonialCards[newIndex].style.animation = "slideFromLeft 0.5s ease-in-out";
    setTimeout(() => {
      testimonialCards[newIndex].style.animation = "";
    }, 500);
  })
  testimonialSliderContainer.appendChild(testimonialElement);
})



//Popular Courses Carousel
const popularCoursesContainer = document.getElementById("popular-courses-carousel");

const getKnownCourse = async () => {
  let res = await fetch(`${API_URL}/knowncourse`);
  res = await res.json();
  if (res.success) {
    let popularCoursesData = res?.response
    popularCoursesData.forEach((course) => {
      const courseElement = document.createElement("div");
      courseElement.classList.add("rounded-lg", "overflow-hidden", "popular-course-card", "mx-3", "mt-2", "mb-5", 'courseDataImg');
      courseElement.innerHTML = `
      <div class="popular-course-img-wrapper relative courserImgDiv">
        <img
          src= "${AWS_S3_HOST}/${course?.logo?.path}"
          alt=${course.name}
          class="h-48 courserImg"
        />
        <div
          class="rounded-full bg-primary p-2 w-12 h-12 flex justify-center items-center absolute bottom-0 right-2/4 transform translate-x-2/4 translate-y-1/2"
        >
          <i class="fas fa-database text-white" ></i>
        </div>
      </div>
      <div
        class="p-3 mt-7"
      >
        <h3
          class="text-center font-semibold text-base lg:text-lg mb-0"
        >
          ${course.name}
        </h3>
      </div>  
      `;
      popularCoursesContainer.appendChild(courseElement);
    });
    setTimeout(() => {
      $('#popular-courses-carousel').slick({
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }, 0);
  }
}
getKnownCourse()

const slickSettings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    }
  ]
};

// University Carousel
const getDataUnivetsity = async () => {
  let res = await fetch(`${API_URL}/university`);
  res = await res.json();
  if (res.success) {
    res = res?.response;
    append(res, '.university-carousel')
    append(res?.reverse(), '.university-carousel2');
    if (res.length >= 6) {
      setTimeout(() => {
        console.log('ok');
        $('.university-carousel').slick(slickSettings);
        $('.university-carousel2').slick({
          rtl: true,
          ...slickSettings
        });
      }, 0);
    }
  }
}

getDataUnivetsity();

function append(data, className) {
  let container = document.querySelector(className);
  container.innerHTML = null;
  data && data.forEach((el, i) => {
    let div = document.createElement('div');
    div.className = 'university_div'
    let childDiv = document.createElement('div')
    let img = document.createElement('img');
    img.src = `${AWS_S3_HOST}/${el?.logo?.path}`;
    img.alt = el?.name
    childDiv.append(img)
    div.append(childDiv)
    container.appendChild(div);
  });
}


const openModalSchool = () => {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

const closeModal = () => {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('modalUni').style.display = 'none';
}

const openModalUni = () => {
  document.getElementById('modalUni').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

async function handleSchoolDemo(event) {
  event.preventDefault();
  let email = document.getElementById('semail').value;
  let name = document.getElementById('sname').value;
  let schoolOrUniversity = document.getElementById('sschool').value;
  let comment = document.getElementById('scomment').value;
  try {
    let res = await fetch(`${API_URL}/user/bookdemo`, {
      method: "POST",
      body: JSON.stringify({ email, name, schoolOrUniversity, comment })
    });
    res = await res.json();
    if (res?.success) {
      email = '';
      name = '';
      schoolOrUniversity = '';
      comment = '';
      closeModal();
      document.getElementById('school_demo').innerText = 'Your demo request has been submitted, we will contact you soon '
    }
  } catch (e) {
    console.log("Error", e)
  }
}

async function handleUniDemo(event) {
  event.preventDefault();
  let email = document.getElementById('uemail').value;
  let name = document.getElementById('uname').value;
  let schoolOrUniversity = document.getElementById('uuniversity').value;
  let comment = document.getElementById('ucomment').value;
  try {
    let res = await fetch(`${API_URL}/user/bookdemo`, {
      method: "POST",
      body: JSON.stringify({ email, name, schoolOrUniversity, comment })
    });
    res = await res.json();
    if (res?.success) {
      email = '';
      name = '';
      schoolOrUniversity = '';
      comment = '';
      closeModal();
      document.getElementById('university_demo').innerText = 'Your demo request has been submitted, we will contact you soon '
    }
  } catch (e) {
    console.log("Error", e)
  }
}