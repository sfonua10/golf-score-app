// let myData = [];
function getAvailableCourses() {
  return fetch("https://golf-courses-api.herokuapp.com/courses/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let courseOptionsHtml =
        "<option selected disabled>Select a golf course</option>";
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
      console.log(data.data);
      //Creating table head data
      const tableElement = document.querySelector("#golf-table");
      const tHead = document.createElement("thead");
      const tRow = document.createElement("tr");
      tableElement.appendChild(tHead);
      tHead.appendChild(tRow);
      let thElement = "<th>Hole</th>";
      let yardageData = "<th>Yardage</th>";
      let parData = "<th>Par</th>";
      let handicapData = "<th>Handicap</th>";
      data.data.holes.forEach(function (hole, index) {
        thElement += `<th>${hole.hole}</th>`;
        yardageData += `<td>${hole.teeBoxes[0].yards}</td>`;
        parData += `<td>${hole.teeBoxes[0].par}</td>`;
        handicapData += `<td>${hole.teeBoxes[0].hcp}</td>`;
      });
      tRow.innerHTML = thElement;

      //Creating body container rows, header, and data
      console.log("yardageData", yardageData);
      const tBody = document.createElement("tbody");
      tableElement.appendChild(tBody);
      const tRow2 = document.createElement("tr");
      const tRow3 = document.createElement("tr");
      const tRow4 = document.createElement("tr");
      tBody.appendChild(tRow2);
      tBody.appendChild(tRow3);
      tBody.appendChild(tRow4);
      tRow2.innerHTML = yardageData;
      tRow3.innerHTML = parData;
      tRow4.innerHTML = handicapData;
      // const tBody = document.createElement("tbody");
      // tableElement.appendChild(tBody);

      // let yards = "<th>Yardage</th>";
    });
}

// function getTeebox(value) {
//   let teeBoxSelectHtml = "";
//   teeBoxes.forEach(function (teeBox, index) {
//     teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
//       teeBox.totalYards
//     } yards</option>`;
//   });

//   document.getElementById("tee-box-select").innerHTML = teeBoxSelectHtml;
// }

class Player {
  constructor(name, id = getNextId(), scores = []) {
    this.name = name;
    this.id = id;
    this.scores = scores;
  }
}
