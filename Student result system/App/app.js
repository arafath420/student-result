findResultForm = document.getElementById("findResultForm");
findResultformAlert = document.querySelector(".find-resultform-alert");
resultOutput = document.querySelector(".result-output");

findResultForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if (!data.roll || !data.regg) {
    findResultformAlert.innerHTML = creatAlert("All Fild Reqoard", "danger");
  } else if (!isNumber(data.roll)) {
    findResultformAlert.innerHTML = creatAlert("Invalid Roll No", "danger");
  } else if (!isNumber(data.regg)) {
    findResultformAlert.innerHTML = creatAlert("Invalid Regg No", "danger");
  } else {
    studentData = getLsData("student");

    const newData = studentData.find(
      (item) => item.rollno === data.roll && item.regno === data.regg
    );

    if (
      studentData.find(
        (item) => item.rollno === data.roll && item.regno === data.regg
      )
    ) {
      if (
        newData.result.bangla > 32 &&
        newData.result.english > 32 &&
        newData.result.math > 32 &&
        newData.result.religion > 32 &&
        newData.result.science > 32 &&
        newData.result.socialScience > 32
      ) {
        resultOutput.innerHTML = `          <div class="card border-0 shadow">
        <div class="card-body">
          <div>
            <img
              style="width: 100px; height: 100px"
              class="rounded-circle mx-auto mw-100 d-block img-thumbnail mb-1"
              src='${newData.photo}'
              alt=""
            />
            <h3 class="text-center">${newData.name}</h3>
            <hr />
            <div class="row">
              <h5 class="col-6 text-right">
                <span class="text-danger">Roll No:</span> ${newData.rollno}
              </h5>
              <h5 class="col-6 text-left">
                <span class="text-danger">Regg No:</span> ${newData.regno}
              </h5>
            </div>
          </div>
          <hr />
  
          <h3 class="text-success">Win</h3>
          <table class="table table-bordered">
            <tr>
              <th>Subject</th>
              <th>Mark</th>
              <th>GPA</th>
              <th>Grade</th>
              <th>CGPA</th>
              <th>Final Result</th>
            </tr>
            <tr>
              <td>Bangla</td>
              <td>${newData.result.bangla}</td>
              <td>${result(newData.result.bangla).gpa}</td>
              <td>${result(newData.result.bangla).grad}</td>
              <td rowspan="6">${
                result(
                  newData.result.bangla +
                    newData.result.english +
                    newData.result.math +
                    newData.result.science +
                    newData.result.socialScience +
                    newData.result.religion / 6
                ).gpa
              }</td>
              <td rowspan="6">${
                result(
                  newData.result.bangla +
                    newData.result.english +
                    newData.result.math +
                    newData.result.science +
                    newData.result.socialScience +
                    newData.result.religion / 6
                ).grad
              }</td>
            </tr>
            <tr>
              <td>English</td>
              <td>${newData.result.english}</td>
              <td>${result(newData.result.english).gpa}</td>
              <td>${result(newData.result.english).grad}</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>${newData.result.math}</td>
              <td>${result(newData.result.math).gpa}</td>
              <td>${result(newData.result.math).grad}</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>${newData.result.science}</td>
              <td>${result(newData.result.science).gpa}</td>
              <td>${result(newData.result.science).grad}</td>
            </tr>
            <tr>
              <td>Social Science</td>
              <td>${newData.result.socialScience}</td>
              <td>${result(newData.result.socialScience).gpa}</td>
              <td>${result(newData.result.socialScience).grad}</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>${newData.result.religion}</td>
              <td>${result(newData.result.religion).gpa}</td>
              <td>${result(newData.result.religion).grad}</td>
            </tr>
          </table>
        </div>
      </div>`;
      } else {
        resultOutput.innerHTML = `          <div class="card border-0 shadow">
        <div class="card-body">
          <div>
            <img
              style="width: 100px; height: 100px"
              class="rounded-circle mx-auto mw-100 d-block img-thumbnail mb-1"
              src='${newData.photo}'
              alt=""
            />
            <h3 class="text-center">${newData.name}</h3>
            <hr />
            <div class="row">
              <h5 class="col-6 text-right">
                <span class="text-danger">Roll No:</span> ${newData.rollno}
              </h5>
              <h5 class="col-6 text-left">
                <span class="text-danger">Regg No:</span> ${newData.regno}
              </h5>
            </div>
          </div>
          <hr />
  
          <h3 class="text-danger">Failed</h3>
          <table class="table table-bordered">
            <tr>
              <th>Subject</th>
              <th>Mark</th>
              <th>GPA</th>
              <th>Grade</th>
              <th>CGPA</th>
              <th>Final Result</th>
            </tr>
            <tr>
              <td>Bangla</td>
              <td>${newData.result.bangla}</td>
              <td>${result(newData.result.bangla).gpa}</td>
              <td>${result(newData.result.bangla).grad}</td>
              <td rowspan="6">${
                result(
                  newData.result.bangla +
                    newData.result.english +
                    newData.result.math +
                    newData.result.science +
                    newData.result.socialScience +
                    newData.result.religion / 6
                ).gpa
              }</td>
              <td rowspan="6">${
                result(
                  newData.result.bangla +
                    newData.result.english +
                    newData.result.math +
                    newData.result.science +
                    newData.result.socialScience +
                    newData.result.religion / 6
                ).grad
              }</td>
            </tr>
            <tr>
              <td>English</td>
              <td>${newData.result.english}</td>
              <td>${result(newData.result.english).gpa}</td>
              <td>${result(newData.result.english).grad}</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>${newData.result.math}</td>
              <td>${result(newData.result.math).gpa}</td>
              <td>${result(newData.result.math).grad}</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>${newData.result.science}</td>
              <td>${result(newData.result.science).gpa}</td>
              <td>${result(newData.result.science).grad}</td>
            </tr>
            <tr>
              <td>Social Science</td>
              <td>${newData.result.socialScience}</td>
              <td>${result(newData.result.socialScience).gpa}</td>
              <td>${result(newData.result.socialScience).grad}</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>${newData.result.religion}</td>
              <td>${result(newData.result.religion).gpa}</td>
              <td>${result(newData.result.religion).grad}</td>
            </tr>
          </table>
        </div>
      </div>`;
      }

      e.target.reset();
    } else {
      resultOutput.innerHTML = `<h3 class="text-center text-danger">Pleas Submit Valid Roll No Or Regg No</h3>`;
    }
  }
};
