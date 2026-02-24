let allJobs = []; 
let interviewList = [];
let rejectedList = [];

const allCardsContainer = document.getElementById('all-cards-container');
const noJobsMsg = document.getElementById('no-jobs-msg');

let activeTab = 'all';


document.querySelectorAll('.job-card').forEach(card => {
    const jobData = {
        cardElement: card,
        status: card.getAttribute('data-status')
    };
    allJobs.push(jobData);
});

function refreshUI() {
    let totalCount = allJobs.length;
    let interviewCount = interviewList.length;
    let rejectedCount = rejectedList.length;

    document.getElementById('total-count').innerText = totalCount;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;

    let visibleCount = 0;

    allJobs.forEach(job => {
        const card = job.cardElement;
        if (activeTab === 'all' || job.status === activeTab) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    document.getElementById('visible-count').innerText = visibleCount + " Jobs";

    if (visibleCount === 0) {
        noJobsMsg.classList.remove('hidden');
    } else {
        noJobsMsg.classList.add('hidden');
    }
}


function changeStatus(button, newStatus) {
    const card = button.closest('.job-card');
    const jobData = allJobs.find(job => job.cardElement === card);
    if (!jobData) return;


    jobData.status = newStatus;


    const label = card.querySelector('.status-label');
    if (label) {
        label.innerText = "Applied";
        label.className = "status-label inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded";
    }


    const jobInfo = {
        cardElement: card,
        status: newStatus
    };


    interviewList = interviewList.filter(j => j.cardElement !== card);
    rejectedList = rejectedList.filter(j => j.cardElement !== card);

    if (newStatus === 'interview') interviewList.push(jobInfo);
    if (newStatus === 'rejected') rejectedList.push(jobInfo);

    refreshUI();
}


function deleteCard(button) {
    const card = button.closest('.job-card');
  
    allJobs = allJobs.filter(j => j.cardElement !== card);
    interviewList = interviewList.filter(j => j.cardElement !== card);
    rejectedList = rejectedList.filter(j => j.cardElement !== card);
    card.remove();
    refreshUI();
}


function filterTab(tabName) {
    activeTab = tabName;

    const btnIds = { 'all': 'all-btn', 'interview': 'int-btn', 'rejected': 'rej-btn' };
    Object.values(btnIds).forEach(id => {
        const btn = document.getElementById(id);
        btn.className = "bg-white text-gray-700 border px-6 py-2 rounded shadow transition hover:bg-gray-100";
    });

    const activeBtn = document.getElementById(btnIds[tabName]);
    activeBtn.className = "bg-blue-500 text-white px-6 py-2 rounded shadow transition";

    const titleObj = { 'all': 'Available Jobs', 'interview': 'Interview List', 'rejected': 'Rejected List' };
    document.getElementById('tab-title').innerText = titleObj[tabName];

    refreshUI();
}


refreshUI();