const numCoursesInput = document.getElementById("numCourses");
const coursesDiv = document.getElementById("courses");
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", function () {
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
});

numCoursesInput.addEventListener("change", function () {
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
  coursesDiv.innerHTML = coursesHtml;
});
