const numCoursesInput = document.getElementById("numCourses");
const coursesDiv = document.getElementById("courses");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

nextButton.addEventListener("click", nextB);

function nextB() {
  const n = parseInt(numCoursesInput.value);
  let coursesHtml = "";
  for (let i = 1; i <= n; i++) {
    coursesHtml += `<label for="credit${i}">Enter the credit points of course ${i}:</label>`;
    coursesHtml += `<input type="number" id="credit${i}" step="0.01">`;
    coursesHtml += `<label for="grade${i}">Enter the expected grade of course ${i}:</label>`;
    coursesHtml += `<select id="grade${i}">`;
    coursesHtml += `<option value="10">A</option>`;
    coursesHtml += `<option value="9">A-</option>`;
    coursesHtml += `<option value="8">B</option>`;
    coursesHtml += `<option value="7">B-</option>`;
    coursesHtml += `<option value="6">C</option>`;
    coursesHtml += `<option value="5">C-</option>`;
    coursesHtml += `<option value="4">D</option>`;
    coursesHtml += `</select><br><br>`;
  }
  nextButton.innerText = "Calculate";
  coursesDiv.innerHTML = coursesHtml;
  nextButton.removeEventListener("click", nextB);
  nextButton.addEventListener("click", calB);
  if (n > 3) {
    document.body.style.height = "100%";
  } else {
    document.body.style.height = "100vh";
  }
}

function calB() {
  const n = parseInt(numCoursesInput.value);
  const credit = new Array(n);
  const grade = new Array(n);
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < n; i++) {
    credit[i] = parseFloat(document.getElementById(`credit${i + 1}`).value);
    grade[i] = parseFloat(document.getElementById(`grade${i + 1}`).value);
    sum += credit[i] * grade[i];
    sum1 += credit[i];
  }
  const sgpa = (sum / sum1).toFixed(3);
  coursesDiv.innerHTML = `<p>Expected SGPA: ${sgpa}</p>`;
  nextButton.innerText = "Next";
  nextButton.removeEventListener("click", calB);
  nextButton.addEventListener("click", nextB);
}

resetButton.addEventListener("click", function () {
  numCoursesInput.value = "";
  coursesDiv.innerHTML = "";
  nextButton.innerText = "Next";
  nextButton.addEventListener("click", nextB);
  document.body.style.height = "100vh";
});

numCoursesInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    nextB();
  }
});
