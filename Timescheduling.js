function addStudyPlan() {
    const subject = document.getElementById('subject').value;
    const studyHours = document.getElementById('studyHours').value;
    const revisionHours = document.getElementById('revisionHours').value;
    const selftestHours = document.getElementById('selftestHours').value;
    const breakHours = document.getElementById('breakHours').value;
    const sleepHours = document.getElementById('sleepHours').value;

    const studyPlan = document.createElement('div');
    studyPlan.innerHTML = `<p>Subject: ${subject}</p><p>Study Hours: ${studyHours}</p><p>Revision Hours: ${revisionHours}</p><p>Selftest Hours: ${selftestHours}</p><p>Break Hours: ${breakHours}</p><p>Sleep Hours: ${sleepHours}</p><hr>`;

    document.getElementById('studyPlanList').appendChild(studyPlan);
}