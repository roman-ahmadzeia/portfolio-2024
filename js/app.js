const workButton1 = document.getElementById("data-specialist-button");
const workButton2 = document.getElementById("web-developer-button");

const workContent1 = document.getElementById("data-specialist");
const workContent2 = document.getElementById("web-developer");

workButton1.addEventListener('click', ()=>{
  workButton1.style.color= "black";
  workButton2.style.color= "grey";

  workContent1.style.display = "block";
  workContent2.style.display = "none";
});

workButton2.addEventListener('click', ()=>{
  workButton2.style.color= "black";
  workButton1.style.color= "grey";

  workContent1.style.display = "none";
  workContent2.style.display = "block";
});

// function showProject(contentid, buttonid)
// {
//   const content = document.getElementById(contentid);
//   const button = document.getElementById(buttonid);
//
//   button.addEventListener('click', ()=>{
//     content.style.display = "block";
//   });
// }
//
// for (let i = 0; i <= 4; i++)
// {
//   showProject('project-'+i,'project-'+i+'-button');
// }

// Function to show project content based on button clicked
function showProjectContent(projectId) {
  // Hide all project contents
  for (let i = 1; i <= 5; i++) {
    const projectContent = document.getElementById(`project-${i}`);
    if (projectContent) {
      projectContent.style.display = "none";
    }
  }

  // Show the selected project content
  const selectedProjectContent = document.getElementById(projectId);
  if (selectedProjectContent) {
    selectedProjectContent.style.display = "block";
  }
}

// Add click event listeners to each project button
document.getElementById("project-1-button").addEventListener("click", function() {
  showProjectContent("project-1");
});

document.getElementById("project-2-button").addEventListener("click", function() {
  showProjectContent("project-2");
});

document.getElementById("project-3-button").addEventListener("click", function() {
  showProjectContent("project-3");
});

document.getElementById("project-4-button").addEventListener("click", function() {
  showProjectContent("project-4");
});


document.getElementById("project-5-button").addEventListener("click", function() {
  showProjectContent("project-5");
});
