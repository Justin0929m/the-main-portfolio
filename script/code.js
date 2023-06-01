function toggleNav() {
  let navLinks = document.querySelectorAll(".nav-link");
  let navbar = document.getElementById("nav-links");

  navLinks.forEach((nav) => nav.classList.toggle("hide"));
  navbar.classList.toggle("show");
}

document.querySelector(".menu").addEventListener("click", toggleNav());

let experienceData = [
  {
    id: 1,
    cardDate: "Apr 2023 - Current",
    cardTitle: "Life Choices",
    cardText:
      "I'm currently attending a 12 month coding bootcamp at Life Choices which will prepare me to become a web developer, I'm learning all the necessary skills thrive as a front end developer.",
  },
  {
    id: 2,
    cardDate: "Mar 2022 - Nov 2022",
    cardTitle: "Business Technology",
    cardText:
      "I worked at Business Technology for 9 months as a Systems Engineer and my daily tasks were as following seeing to clients hardware and software issues, doing client visits and setting up PCs for clients. The reason why I left was because I felt like it wasn't what I wanted to do and needed to do something else.",
  },
  {
    id: 3,
    cardDate: "Jun 2019 - Nov 2019",
    cardTitle: "First Technology",
    cardText:
      "I worked at First Technology for 5 months and my daily tasks were creating power apps and power flows for clients, seeing to clients SharePoint Sites, creating custom sharepoint sites. The reason why I left was because I felt like I wasn't ready and needed to studying further.",
  },
  {
    id: 4,
    cardDate: "Jan 2012 - Dec 2016",
    cardTitle: "Rhodes High School",
    cardText:
      "My high school period wasn't the best but I'm proud of the person I become after I graduated.",
  },
];

let experienceSection = document.querySelector(".experience-section");

experienceData.forEach((content) => {
  experienceSection.innerHTML += `
    <div class="card">
                <div class="card-body">
                    <p class="card-date">${content.cardDate}</p>
                    <p class="card-title">${content.cardTitle}</p>
                    <p class="card-text">${content.cardText}</p>
                </div>
            </div>`;
});

let projectData = [
  {
    id: 1,
    projectImg: "https://i.postimg.cc/02MtHfqM/Capture.png",
    projectTitle: "Project 1",
    projectText:
      "I can't seem to pick a portfolio and stick with it, almost like I'm on the hunt for the perfect one which is why I have so many portfolio websites but I think I'm going to stop with this one.",
    github: "https://github.com/Justin0929m/final-portfolio.git",
    live: "https://myportfoliobro.netlify.app/",
  },
  {
    id: 2,
    projectImg: "https://i.postimg.cc/V6Rh1jDm/Untitled.png",
    projectTitle: "Project 2",
    projectText:
      "With this website I tried to solve an issue for my mom by creating a website to help her sell things since she tends to sell clothing and different items, I'm still in the process of building the website.",
    github: "https://github.com/Justin0929m/project-1.git",
    live: "https://homesalestoday.netlify.app/",
  },
  {
    id: 3,
    projectImg: "https://i.postimg.cc/cLTBLb6r/tempsnip.png",
    projectTitle: "Project 3",
    projectText:
      "I at times search on Pinterest for website designs and I'll try to create it to see where my skills are at and this is one of the websites I recreated with flexbox and grid.",
    github: "https://github.com/Justin0929m/travel-website.git",
    live: "https://1travelwebsite1.netlify.app/",
  },
  {
    id: 4,
    projectImg: "https://i.postimg.cc/VLRxbmYK/Capture.png",
    projectTitle: "Project 4",
    projectText:
      "Another one of my portfolio websites.",
    github: "https://github.com/Justin0929m/portfolio-website.git",
    live: "https://thisportfoliocv.netlify.app/",
  },
  {
    id: 5,
    projectImg: "https://i.postimg.cc/13syrK2r/Untitled.png",
    projectTitle: "Project 5",
    projectText:
      "I found this website on dribble and recreated it, I can now say that I can confidently recreate certain designs. I also found out that if you give me enough time I will recreate any figma or photoshop design into HTML, CSS and JavaScript.",
    github: "https://github.com/Justin0929m/property-Website-Update.git",
    live: "https://prowebtoday.netlify.app/",
  },
];

let projectSection = document.querySelector(".project-section");

projectData.forEach((content) => {
  projectSection.innerHTML += ` <div class="card-project">
            <img src="${content.projectImg}" class="project-img" alt="" loading="lazy"/>
            <div class="card-body-project">
              <p class="card-title-project">${content.projectTitle}</p>
              <p class="card-text-project">
                ${content.projectText}
              </p>
              <div class="icons">
                <a href="${content.github}" target="_blank"
                  ><i class="bi bi-github"></i
                ></a>
                <a href="${content.live}" target="_blank"
                  ><i class="bi bi-box-arrow-up-right"></i
                ></a>
              </div>
            </div>
          </div>`;
});
