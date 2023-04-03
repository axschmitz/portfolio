const ProjectArrows = Array.from(document.querySelectorAll(".slider"));

console.log(ProjectArrows);
console.log(ProjectArrows.length);

const ProjectArrowLeft = ProjectArrows[0];
const ProjectArrowRight = ProjectArrows[1];
const Projects = Array.from(document.querySelectorAll(".project"));
let ActiveProject = Projects[0];
let ActiveProjectIndex = 0;

function CycleProjects(direction) {
    if (direction === "left") {
        CycleLeft();
    } else {
        CycleRight();
    }
}

if (ProjectArrowLeft) {
    ProjectArrowLeft.addEventListener("click", function() { CycleProjects("left") } )
}

if (ProjectArrowRight) {
    ProjectArrowRight.addEventListener("click", function() { CycleProjects("right") })
}

console.log(Projects);

function CycleRight() {
    if (ActiveProjectIndex + 1 === Projects.length) {
        Projects[ActiveProjectIndex].classList.add("hidden");
        Projects[0].classList.remove("hidden");

        ActiveProjectIndex = 0;
    } else {
        Projects[ActiveProjectIndex].classList.add("hidden");
        Projects[ActiveProjectIndex + 1].classList.remove("hidden");

        ActiveProjectIndex++;
    }
}

function CycleLeft() {
    if (ActiveProjectIndex - 1 < 0) {
        Projects[0].classList.add("hidden");
        Projects[Projects.length - 1].classList.remove("hidden");

        ActiveProjectIndex = Projects.length - 1;
    } else {
        Projects[ActiveProjectIndex].classList.add("hidden");
        Projects[ActiveProjectIndex - 1].classList.remove("hidden");

        ActiveProjectIndex--;
    }
}