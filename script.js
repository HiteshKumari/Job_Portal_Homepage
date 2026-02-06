const jobList = document.getElementById("jobList");
const jobCount = document.getElementById("jobCount");
const jobForm = document.getElementById("jobForm");
const searchInput = document.getElementById("searchInput");

function updateJobCount(){
    jobCount.textContent = document.querySelectorAll(".job").length;
}

function applyOnce(btn){
    btn.onclick = () => {
        btn.textContent = "Applied";
        btn.disabled = true;
    };
}

function addDelete(job){
    const d = document.createElement("button");
    d.textContent = "Delete";
    d.className = "delete-btn";
    d.onclick = () => {
        job.remove();
        updateJobCount();
    };
    job.appendChild(d);
}

document.querySelectorAll(".candidate-job").forEach(job=>{
    applyOnce(job.querySelector(".apply-btn"));
});

jobForm.addEventListener("submit", e=>{
    e.preventDefault();

    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const location = document.getElementById("location").value;
    const jobType = document.getElementById("jobType").value;

    const job = document.createElement("div");
    job.className = "job recruiter-job";

    job.innerHTML = `
        <span class="tag">${jobType}</span>
        <h3>${jobTitle}</h3>
        <p>${companyName}</p>
        <p>${location}</p>
        <button disabled>Posted</button>
    `;

    addDelete(job);
    jobList.appendChild(job);
    jobForm.reset();
    updateJobCount();
});

searchInput.addEventListener("keyup", ()=>{
    const value = searchInput.value.toLowerCase();
    document.querySelectorAll(".job").forEach(job=>{
        job.style.display = job.textContent.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
});

updateJobCount();
