function getAvailableCourses() {
  return fetch("https://golf-courses-api.herokuapp.com/courses/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let courseOptionsHtml = "";
      data.courses.forEach((course) => {
        courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
      });

      document.getElementById("course-select").innerHTML = courseOptionsHtml;
    });
}

getAvailableCourses();

function getIndividualCourse(golfId) {
  return fetch(`https://golf-courses-api.herokuapp.com/courses/${golfId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("indivisual course data:", data);
      let teeBoxSelectHtml = "";
      teeBoxes.forEach(function (teeBox, index) {
        teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
          teeBox.totalYards
        } yards</option>`;
      });

      document.getElementById("tee-box-select").innerHTML = teeBoxSelectHtml;
    });
}
