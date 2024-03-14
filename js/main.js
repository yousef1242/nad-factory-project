const barIcon = document.querySelector(".bar-icon");
const headerLinks = document.querySelector(".header-links");
const headerLinksUl = document.querySelector(".header-links ul");
const projectsCards = document.querySelector(".projects-cards");
const projectModel = document.querySelector(".single-project-model");

// toggle header menu
const toggleHeaderMenu = (isOpen) => {
  if (isOpen) {
    barIcon.innerHTML = `<i onclick="toggleHeaderMenu(${false})" class="fa-solid fa-xmark"></i>`;
    headerLinks.classList.remove("hidden");
    headerLinks.classList.add(
      "absolute",
      "left-0",
      "top-[96px]",
      "bg-[var(--light-color)]",
      "w-full",
      "z-20"
    );
    headerLinksUl.classList.remove("items-center");
    headerLinksUl.classList.add("flex-col", "items-start", "p-5");
    const listLiItems = headerLinksUl.querySelectorAll("li");
    listLiItems.forEach((li) => {
      li.classList.remove("me-10");
      li.classList.add("mb-10");
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
      "./images/project-1- (1).png",
      "./images/project-1- (2).png",
      "./images/project-1- (3).png",
      "./images/project-1- (4).png",
      "./images/project-1- (5).png",
      "./images/project-1- (6).png",
    ],
  },
  {
    projectName: "مدرسة رقم ٥١ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-2- (1).png",
      "./images/project-2- (2).png",
      "./images/project-2- (3).png",
      "./images/project-2- (4).png",
    ],
  },
  {
    projectName: "مدرسة رقم ٥٥ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-3- (1).png",
      "./images/project-3- (2).png",
      "./images/project-3- (3).png",
      "./images/project-3- (4).png",
    ],
  },
  {
    projectName: "روضة رقم ٣٦ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-4- (1).png",
      "./images/project-4- (2).png",
      "./images/project-4- (3).png",
      "./images/project-4- (4).png",
      "./images/project-4- (5).png",
      "./images/project-4- (6).png",
    ],
  },
  {
    projectName: "روضة رقم ٥٦ (روشن)",
    owner: "شركة تطوير المباني التعليم TBC",
    contractor: "الراجحي للتعمير",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-5- (1).png",
      "./images/project-5- (2).png",
      "./images/project-5- (3).png",
      "./images/project-5- (4).png",
      "./images/project-5- (5).png",
      "./images/project-5- (6).png",
    ],
  },
  {
    projectName: "مستشفى عنيزه للولادة والأطفال سعة ٢٠٠ سرير",
    owner: "وزارة الصحة",
    contractor: "شركة عبدالله السيد للمقاولات العامة",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-6- (1).png",
      "./images/project-6- (2).png",
      "./images/project-6- (3).png",
    ],
  },
  {
    projectName: "مبنى وزارة التجارة ـــ الاحساء",
    owner: "وزارة التجارة",
    contractor: "الشايعي للمقاولات",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: ["./images/project-7- (1).png", "./images/project-7- (2).png"],
  },
  {
    projectName: "زجاج فاير ريتد مضاد للرصاص",
    owner: "وزارة الرياضة",
    contractor: "مجموعة النصبان للمقاولات",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-8- (1).png",
      "./images/project-8- (2).png",
      "./images/project-8- (3).png",
      "./images/project-8- (4).png",
      "./images/project-8- (5).png",
    ],
  },
  {
    projectName: "الكابات كاب ١ كاب ٢",
    owner: "وزارة الداخلية",
    contractor: "شمال الخليج",
    aluminum: "مصنع أنظمة ناد للصناعة",
    images: [
      "./images/project-9- (1).png",
      "./images/project-9- (2).png",
      "./images/project-9- (3).png",
      "./images/project-9- (4).png",
      "./images/project-9- (5).png",
    ],
  },
];

// set project cards
const addProjectsCards = () => {
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-duration", "1500");
    projectCard.classList.add("child", "p-2", "w-full", "md:w-6/12");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add(
      "w-full",
      "cursor-pointer",
      "bg-white",
      "h-full",
      "md:h-[200px]",
      "shadow-md",
      "flex",
      "flex-wrap",
      "rounded-lg",
      "overflow-hidden",
      "flex-row"
    );

    innerDiv.addEventListener("click", () => openSingleProjectModel(project));

    const projectCardImage = document.createElement("div");
    projectCardImage.classList.add(
      "project-card-image",
      "w-full",
      "h-[240px]",
      "md:h-[200px]",
      "md:w-4/12"
    );
    const image = document.createElement("img");
    image.style.objectFit = "cover";
    image.classList.add("h-full", "w-full");
    image.setAttribute("loading", "lazy");
    image.setAttribute("src", project.images[0]);
    image.setAttribute("alt", `${project["projectName"]} image`);
    projectCardImage.appendChild(image);

    const projectCardContent = document.createElement("div");
    projectCardContent.classList.add(
      "project-card-content",
      "w-full",
      "flex",
      "justify-center",
      "p-3",
      "flex-col",
      "md:w-8/12"
    );

    const projectName = document.createElement("h4");
    projectName.classList.add(
      "text-slate-800",
      "font-bold",
      "mb-4",
      "text-2xl",
      "xl:text-3xl"
    );
    projectName.textContent = project["projectName"];

    projectCardContent.appendChild(projectName);

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
        projectCardContent.appendChild(propertyContainer);
      }
    }

    innerDiv.appendChild(projectCardImage);
    innerDiv.appendChild(projectCardContent);

    projectCard.appendChild(innerDiv);
    projectsCards.appendChild(projectCard);
  });
};

addProjectsCards();

// single project model
function openSingleProjectModel(project) {
  try {
    const parsedProject = JSON.parse(JSON.stringify(project));
    if (parsedProject) {
      projectModel.classList.remove("hidden");
      projectModel.classList.add("block");
      projectModel.innerHTML = `
         <div class="container mx-auto px-2 h-full flex justify-center items-center">
           <section class="single-project-model-content w-[500px] bg-white shadow-md rounded-lg overflow-hidden">
             <div class="single-project-images swiper mySwiper">
               <div onClick="closeSingleProjectModel()" class="absolute z-[9] w-[25px] h-[25px] flex justify-center items-center bg-white rounded-full cursor-pointer text-center right-[10px] top-[10px]">
                 <i class="fa-solid fa-xmark"></i>
               </div>
               <div class="swiper-wrapper">
                 ${parsedProject.images
                   .map(
                     (image, index) => `
                   <div class="swiper-slide">
                     <img class="w-full h-[300px]  object-cover" src="${image}" alt="${
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
           </section>
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

// close single project model
function closeSingleProjectModel() {
  projectModel.classList.add("hidden");
  projectModel.classList.remove("block");
}
