let interViews = [];
let rejected = [];
let currentStatus = "all-btn"; 

const allCardContainer = document.getElementById("allCard-container");
const allFilterSection = document.getElementById("allFilter");
const total = document.getElementById("totalCount");
const interViewCards = document.getElementById("interviewCount");
const rejectedCards = document.getElementById("rejectCount");
const availableJobsCount = document.getElementById("availableJobsCount");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// Calculation Function
function calculateCards() {
  const totalJobs = allCardContainer.children.length;

  total.innerText = totalJobs;
  interViewCards.innerText = interViews.length;
  rejectedCards.innerText = rejected.length;

  let currentDisplayCount = totalJobs;
  if (currentStatus === "interview-btn") {
    currentDisplayCount = interViews.length;
  } else if (currentStatus === "rejected-btn") {
    currentDisplayCount = rejected.length;
  }

  availableJobsCount.innerHTML = `<span id="count" class="font-bold">${currentDisplayCount}</span> of ${totalJobs} jobs`;
}

//  Toggle Button Function
function toggleBtn(id) {
  currentStatus = id;

  // button styles
  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");
  allBtn.classList.add("bg-white", "text-black");
  interviewBtn.classList.add("bg-white", "text-black");
    rejectedBtn.classList.add("bg-white", "text-black");

  const clickbtn = document.getElementById(id);
  clickbtn.classList.add("bg-blue-500", "text-white");
  clickbtn.classList.remove("bg-white", "text-black");

  if (id === "all-btn") {
    allCardContainer.classList.remove("hidden");
    allFilterSection.classList.add("hidden");
  } else if (id === "interview-btn") {
    allCardContainer.classList.add("hidden");
    allFilterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "rejected-btn") {
    allCardContainer.classList.add("hidden");
    allFilterSection.classList.remove("hidden");
    renderRejected();
  }

  calculateCards();
}


