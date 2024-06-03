function markAttendance() {
    const studentName = document.getElementById('studentName').value.trim();
    if (studentName !== "") {
        const attendanceList = document.getElementById('attendanceList');
        const listItem = document.createElement('li');
        listItem.textContent = studentName;
        attendanceList.appendChild(listItem);
        document.getElementById('studentName').value = "";
    } else {
        alert("Please enter a student name.");
    }
}
