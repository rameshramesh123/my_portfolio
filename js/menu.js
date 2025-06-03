const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
    menuToggle();
    menuIcon.classList.toggle("scale-105");
    list.addEventListener("click", () => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("hidden");
    });
});

function menuToggle(params) {
    dropdownMenu.classList.toggle("hidden");
    dropdownMenu.classList.toggle("flex");
}

//Projects Lists

const projectList = [{
        id: 5,
        title: "Bus Booking System",
        img: "build/img/busbooking.png",
        githubLink: "https://github.com/rameshramesh123/Bus_Booking",
        desc: "The Bus Booking Management System simplifies online bus reservations by providing an intuitive interface for Admins to manage buses and seats, while allowing Passengers to book and download PDF tickets seamlessly. With a robust backend and user-friendly frontend, this system ensures an efficient and hassle-free experience for users. Future improvements can include payment integration, real-time seat updates, and mobile app support to enhance usability further.",
    },
    {
        id: 6,
        title: "Patient and Doctor Management System",
        img: "build/img/patientdoctormanagement.png",
        githubLink: "https://github.com/rameshramesh123/Patient_Medicine-and-Appointment_Management_System",
        desc: "This project is a full-stack web application developed to efficiently manage interactions between doctors and patients, including assigning medicines and viewing prescription histories. The system supports secure data handling and provides user-friendly interfaces for doctors and patients.",
    },
    {
        id: 1,
        title: "Employee Management System",
        img: "build/img/employeemanagementsystem.png",
        githubLink: "https://github.com/rameshramesh123/Employee_Management_System",
        desc: "The Employee Management System is a full-stack web application designed to manage employee records within an organization. It provides functionality to add, update, delete, and view employee details through a simple and responsive user interface.",
    },
];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList) {
    let displayProjects = projectsList.map(function(item) {
        return `
        <div class="project-card" class="text-gray-300">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
            </div>
            <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
        </div>`;
    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;
}

window.addEventListener("DOMContentLoaded", function() {
    displayAllProjects(projectList);
});