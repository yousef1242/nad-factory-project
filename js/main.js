const barIcon = document.querySelector(".bar-icon");
const headerLinks = document.querySelector(".header-links");
const headerLinksUl = document.querySelector(".header-links ul");
const projectsCards = document.querySelector(".projects-cards");
const creditsCards = document.querySelector(".credits-cards");
const partnersCards = document.querySelector(".partners-cards");
const singelModel = document.querySelector(".single-model");

// toggle header menu
const toggleHeaderMenu = (isOpen) => {
  if (isOpen) {
    barIcon.innerHTML = `<i onclick="toggleHeaderMenu(${false})" class="fa-solid fa-xmark"></i>`;
    headerLinks.classList.remove("hidden");
    headerLinks.classList.add(
      "absolute",
      "left-0",
      "top-[95px]",
      "bg-[var(--light-color)]",
      "w-full",
      "z-20"
    );
    headerLinksUl.classList.remove("items-center");
    headerLinksUl.classList.add("flex-col", "items-start", "p-5");
    const listLiItems = headerLinksUl.querySelectorAll("li");
    listLiItems.forEach((li) => {
      li.classList.remove("me-10");
      li.classList.add("mb-5");
    });
  } else if (!isOpen) {
    barIcon.innerHTML = `<i onclick="toggleHeaderMenu(${true})" class="fa-solid fa-bars-staggered text-slate-600"></i>`;
    headerLinks.classList.add("hidden");
    headerLinks.classList.remove(
      "absolute",
      "left-0",
      "top-[96px]",
      "bg-[var(--light-color)]",
      "w-full",
      "z-20"
    );
  }
};

// projects data
const projects = [
  {
    projectName: "مدرسة بدر",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-1- (1)..webp",
      "images/project-1- (2)..webp",
      "images/project-1- (3)..webp",
      "images/project-1- (4)..webp",
      "images/project-1- (5)..webp",
      "images/project-1- (6)..webp",
    ],
  },
  {
    projectName: "مدرسة رقم ٥١ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-2- (1)..webp",
      "images/project-2- (2)..webp",
      "images/project-2- (3)..webp",
      "images/project-2- (4)..webp",
    ],
  },
  {
    projectName: "مدرسة رقم ٥٥ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-3- (1)..webp",
      "images/project-3- (2)..webp",
      "images/project-3- (3)..webp",
      "images/project-3- (4)..webp",
    ],
  },
  {
    projectName: "روضة رقم ٣٦ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-4- (1)..webp",
      "images/project-4- (2)..webp",
      "images/project-4- (3)..webp",
      "images/project-4- (4)..webp",
      "images/project-4- (5)..webp",
      "images/project-4- (6)..webp",
    ],
  },
  {
    projectName: "روضة رقم ٥٦ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-5- (1)..webp",
      "images/project-5- (2)..webp",
      "images/project-5- (3)..webp",
      "images/project-5- (4)..webp",
      "images/project-5- (5)..webp",
      "images/project-5- (6)..webp",
    ],
  },
  {
    projectName: "مستشفى عنيزه للولادة والأطفال سعة ٢٠٠ سرير",
    owner: "وزارة الصحة",
    contractor: "شركة عبدالله السيد للمقاولات العامة",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-6- (1)..webp",
      "images/project-6- (2)..webp",
      "images/project-6- (3)..webp",
    ],
  },
  {
    projectName: "مبنى وزارة التجارة ـــ الاحساء",
    owner: "وزارة التجارة",
    contractor: "الشايعي للمقاولات",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: ["images/project-7- (1)..webp", "images/project-7- (2)..webp"],
  },
  {
    projectName: "زجاج فاير ريتد مضاد للرصاص",
    owner: "وزارة الرياضة",
    contractor: "مجموعة النصبان للمقاولات",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-8- (1)..webp",
      "images/project-8- (2)..webp",
      "images/project-8- (3)..webp",
      "images/project-8- (4)..webp",
      "images/project-8- (5)..webp",
    ],
  },
  {
    projectName: "الكابات كاب ١ كاب ٢",
    owner: "وزارة الداخلية",
    contractor: "شمال الخليج",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "images/project-9- (1)..webp",
      "images/project-9- (2)..webp",
      "images/project-9- (3)..webp",
      "images/project-9- (4)..webp",
      "images/project-9- (5)..webp",
    ],
  },
];

// set project cards
const addProjectsCards = () => {
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-duration", "1500");
    projectCard.classList.add("child", "p-2", "w-full", "md:w-4/12");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add(
      "w-full",
      "cursor-pointer",
      "bg-white",
      "h-full"
    );

    innerDiv.addEventListener("click", () => openSingleModel(project));

    const projectCardImage = document.createElement("div");
    projectCardImage.classList.add(
      "project-card-image",
      "relative",
      "w-full",
      "h-[240px]"
    );
    
    const image = document.createElement("img");
    image.style.objectFit = "cover";
    image.classList.add("h-full", "w-full");
    image.setAttribute("loading", "lazy");
    image.setAttribute("src", project.images[0]);
    image.setAttribute("alt", `${project["projectName"]} image`);
    
    const overlay = document.createElement("div");
    overlay.classList.add(
      "overlay",
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-50",
      "backdrop-blur-sm",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "font-bold",
      "text-xl"
    );
    overlay.textContent = project["projectName"];

    projectCardImage.appendChild(image);
    projectCardImage.appendChild(overlay);

    innerDiv.appendChild(projectCardImage);
    projectCard.appendChild(innerDiv);
    projectsCards.appendChild(projectCard);
  });
};


addProjectsCards();

// single project model
function openSingleModel(project) {
  try {
    const parsedProject = JSON.parse(JSON.stringify(project));
    if (parsedProject) {
      singelModel.classList.remove("hidden");
      singelModel.classList.add("block");
      singelModel.innerHTML = `
         <div class="container mx-auto px-2 h-full flex justify-center items-center">
           <div class="single-project-model-content w-[500px] bg-white shadow-md rounded-lg overflow-hidden">
             <div class="single-project-images swiper mySwiper">
               <div onClick="closeSingleModel()" class="absolute z-[9] w-[25px] h-[25px] flex justify-center items-center bg-white rounded-full cursor-pointer text-center right-[10px] top-[10px]">
                 <i class="fa-solid fa-xmark"></i>
               </div>
               <div class="swiper-wrapper">
                 ${parsedProject.images
                   .map(
                     (image, index) => `
                   <div class="swiper-slide">
                     <img class="w-full h-[300px] object-cover" src="${image}" alt="${
                       parsedProject.projectName
                     } image ${index + 1}" />
                   </div>`
                   )
                   .join("")}
               </div>
               <div class="swiper-button-next"></div>
               <div class="swiper-button-prev"></div>
               <div class="swiper-pagination"></div>
             </div>
             <div class="single-project-content p-2" id="single-project-content">
               <h4 class="text-slate-800 mb-4 font-bold text-1xl lg:text-2xl">${
                 parsedProject.projectName
               }</h4>
             </div>
           </div>
         </div>`;

      const translations = {
        owner: "المالك",
        contractor: "المقاول",
        aluminum: "الألمنيوم",
      };

      for (const property in project) {
        if (property !== "images" && property !== "projectName") {
          const propertyContainer = document.createElement("div");
          propertyContainer.classList.add("flex", "items-center", "mb-2");

          const propertyName = document.createElement("p");
          propertyName.classList.add(
            "text-slate-600",
            "text-lg",
            "font-semibold",
            "mr-2"
          );
          propertyName.textContent = `${translations[property]}:`;

          const propertyValue = document.createElement("p");
          propertyValue.classList.add("text-slate-700", "text-lg");
          propertyValue.textContent = project[property];

          propertyContainer.appendChild(propertyName);
          propertyContainer.appendChild(propertyValue);
          document
            .getElementById("single-project-content")
            .appendChild(propertyContainer);
        }
      }

      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      alert("Something went wrong, please try again");
    }
  } catch (error) {
    console.error("Error parsing project data:", error);
    alert("Something went wrong, please try again");
  }
}

// credits
const credits = [
  {
    title: "إعتمادات وزارة التجارة",
    images: [
      "images/credit-1- (1).jpg",
      "images/credit-1- (2).jpg",
      "images/credit-1- (3).jpg",
      "images/credit-1- (4).jpg",
      "images/credit-1- (5).jpg",
    ],
  },
  {
    title: "إعتمادات وزارة التربية والتعليم",
    images: ["images/credit-2- (1).jpg", "images/credit-2- (2).jpg"],
  },
  { title: "إعتمادات وزارة الداخلية", images: ["images/credit-3-(1).jpg"] },
  {
    title: "إعتمادات وزارة الصحة",
    images: [
      "images/credit-4- (1).jpg",
      "images/credit-4- (2).jpg",
      "images/credit-4- (3).jpg",
      "images/credit-4- (4).jpg",
      "images/credit-4- (5).jpg",
      "images/credit-4- (6).jpg",
      "images/credit-4- (7).jpg",
      "images/credit-4- (8).jpg",
      "images/credit-4- (9).jpg",
      "images/credit-4- (10).jpg",
    ],
  },
  {
    title: "إعتمادات شركة TBC",
    images: [
      "images/credit-5- (1).jpg",
      "images/credit-5- (2).jpg",
      "images/credit-5- (3).jpg",
    ],
  },
  {
    title: "معتمد من قبل الخدمات الطبية القوات المسلحة",
    images: [
      "images/credit-6- (1).jpg",
      "images/credit-6- (2).jpg",
      "images/credit-6- (3).jpg",
      "images/credit-6- (4).jpg",
    ],
  },
  {
    title: "إعتمادات وزارة البيئة والمياة الزراعية",
    images: ["images/credit-7- (1).jpg", "images/credit-7- (2).jpg"],
  },
];

// set credits cards
const addCreditsCards = () => {
  credits.forEach((credit) => {
    const creditCard = document.createElement("div");
    creditCard.setAttribute("data-aos", "fade-up");
    creditCard.setAttribute("data-aos-duration", "1500");
    creditCard.classList.add(
      "child",
      "mb-5",
      "p-2",
      "w-6/12",
      "md:w-4/12",
      "lg:w-3/12"
    );

    const innerDiv = document.createElement("div");
    innerDiv.classList.add(
      "w-full",
      "cursor-pointer",
      "bg-white",
      "h-full",
      "shadow-md",
      "relative"
    );

    innerDiv.addEventListener("click", () => openSingleCreditModel(credit));

    const creditCardImageDiv = document.createElement("div");
    creditCardImageDiv.classList.add("credit-card-image", "relative", "w-full", "h-[240px]");

    const creditCardImage = document.createElement("img");
    creditCardImage.setAttribute("src", credit.images[0]);
    creditCardImage.setAttribute("loading", "lazy");
    creditCardImage.setAttribute("alt", credit.title + " image");
    creditCardImage.classList.add("h-full", "w-full", "object-cover");

    const overlay = document.createElement("div");
    overlay.classList.add(
      "overlay",
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-50",
      "backdrop-blur-sm",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "font-bold",
      "text-xl",
      "text-center",
      "p-2"
    );
    overlay.textContent = credit["title"];

    creditCardImageDiv.appendChild(creditCardImage);
    creditCardImageDiv.appendChild(overlay);

    innerDiv.appendChild(creditCardImageDiv);
    creditCard.appendChild(innerDiv);
    creditsCards.appendChild(creditCard);
  });
};


addCreditsCards();

// single credit model
function openSingleCreditModel(credit) {
  try {
    const parsedCredit = JSON.parse(JSON.stringify(credit));
    if (parsedCredit) {
      singelModel.classList.remove("hidden");
      singelModel.classList.add("block");
      singelModel.innerHTML = `
         <div class="container mx-auto p-5 h-full flex justify-center items-center sm:items-start">
           <div class="single-credit-model-content rounded-lg overflow-hidden">
             <div class="single-credit-images swiper mySwiper">
               <div onClick="closeSingleModel()" class="absolute z-[9] w-[25px] h-[25px] flex justify-center items-center bg-white rounded-full cursor-pointer text-center right-[10px] top-[10px]">
                 <i class="fa-solid fa-xmark"></i>
               </div>
               <div class="swiper-wrapper">
                 ${parsedCredit.images
                   .map(
                     (image) => `
                   <div class="swiper-slide">
                     <img class="w-full h-full object-cover" loading="lazy" src="${image}" alt="${parsedCredit.title} image" />
                   </div>`
                   )
                   .join("")}
               </div>
               <div class="swiper-button-next credit-swiper-btn"></div>
               <div class="swiper-button-prev credit-swiper-btn"></div>
               <div class="swiper-pagination"></div>
             </div>
           </div>
         </div>`;

      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      alert("Something went wrong, please try again");
    }
  } catch (error) {
    console.error("Error parsing project data:", error);
    alert("Something went wrong, please try again");
  }
}

// close single project model
function closeSingleModel() {
  singelModel.classList.add("hidden");
  singelModel.classList.remove("block");
}
// partners data
const partnersData = [
  "images/partners- (1).png",
  "images/partners- (2).png",
  "images/partners- (3).png",
  "images/partners- (4).png",
  "images/partners- (5).png",
  "images/partners- (6).png",
  "images/partners- (7).png",
  "images/partners- (8).png",
  "images/partners- (9).png",
  "images/partners- (10).png",
  "images/partners- (11).png",
  "images/partners- (12).png",
];

// set partners cards
const setPartnersCards = () => {
  partnersData.map(
    (partner) =>
      (partnersCards.innerHTML += `
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="child p-2 w-6/12 md:w-3/12 lg:w-3/12">
            <div class="w-full flex justify-center">
              <img loading="lazy" class="w-[130px] h-[130px]" src="${partner}" alt="Nad trusted partner">
              </div>
            </div>`)
  );
};
setPartnersCards();
