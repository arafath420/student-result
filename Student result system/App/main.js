createStudentForm = document.getElementById("createStudentForm");
formAlert = document.querySelector(".form-alert");
studentList = document.querySelector(".student-list");
stVieawModal = document.querySelector(".st-vieaw-content");
editFormAlert = document.querySelector(".edit-sudent-form-alert");
editStudentForm = document.getElementById("editStudentForm");
addResultForm = document.getElementById("addResultForm");
addResultFormAlert = document.querySelector(".add-result-form-alert");
editResultForm = document.getElementById("editResultForm");

/**
 * Show Student In Student List
 */
const showStudents = () => {
  let content = "";
  let student = getLsData("student");

  if (student.length > 0) {
    student.map((item, index) => {
      content += `
      
      <tr class="align-baseline">
        <td>${index + 1}</td>
        <td>
          <img
            class="rounded-circle"
            style="width: 40px; height: 40px"
            src="${item.photo}"
            alt="${item.name}"
          />
        </td>
        <td>
          <h6>${item.name}</h6>
        </td>
        <td>
          <p>${item.rollno}</p>
        </td>
        <td>
          <p>${item.regno}</p>
        </td>
        <td>
          <p>${timeAgo(item.createdAt)}</p>
        </td>
        <td>
        ${
          item.result === null
            ? `<button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addResultModal" onclick="addResult('${item.id}')" >Add Mark</button>`
            : `<button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-result" onclick="editResult('${item.id}')">Edit Mark</button>`
        }
          
        </td>
        <td class="">
          <button class="btn btn-sm btn-info"
          data-bs-toggle="modal"
            data-bs-target="#st-vieaw-modal" onclick="showSingleStudent('${
              item.id
            }')"
          >
            <i class="fa fa-eye"></i>
          </button>
          
          <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
          data-bs-target="#editStudentModal" onclick="editStudentData('${
            item.id
          }')">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-danger" onclick="deletStudent('${
            item.id
          }')">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`;
    });
  } else {
    content = `<tr>
      <td colspan="8" class="text-center"> Not Student Found </td>
    </tr>`;
  }

  studentList.innerHTML = content;
};
showStudents();

/**
 * Add Student Result
 */
const addResult = (id) => {
  oldData = getLsData("student");
  let data = oldData.find((item) => item.id === id);
  addResultForm.querySelector('input[name="id"]').value = data.id;
};

/**
 * Edit Student Result
 */
const editResult = (id) => {
  const getOldData = getLsData("student");
  const data = getOldData.find((item) => item.id === id);

  editResultForm.querySelector('input[name="bangla"]').value =
    data.result.bangla;
  editResultForm.querySelector('input[name="english"]').value =
    data.result.english;
  editResultForm.querySelector('input[name="math"]').value = data.result.math;
  editResultForm.querySelector('input[name="science"]').value =
    data.result.science;
  editResultForm.querySelector('input[name="socialScience"]').value =
    data.result.socialScience;
  editResultForm.querySelector('input[name="religion"]').value =
    data.result.religion;
  editResultForm.querySelector('input[name="id"]').value = data.id;
};

editResultForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const oldData = getLsData("student");

  oldData[oldData.findIndex((item) => item.id === data.id)] = {
    ...oldData[oldData.findIndex((item) => item.id === data.id)],
    result: data,
  };

  setLsData("student", oldData);

  showStudents();
};

/**
 * Delete Student From Student List
 */
const deletStudent = (id) => {
  const oldStudent = getLsData("student");
  const updateStudent = oldStudent.filter((data) => data.id != id);

  setLsData("student", updateStudent);
  showStudents();
};

/**
 * View Single Student Data
 */
const showSingleStudent = (id) => {
  const oldStudents = getLsData("student");
  const singleData = oldStudents.find((data) => data.id === id);

  stVieawModal.innerHTML = `
  
  <div>
  <div class="student-view-img w-100 m-auto">
    <img
      style="width: 200px; height: 200px"
      class="m-auto mw-100 rounded-circle text-center d-block"
      src="${singleData.photo}"
      alt="${singleData.name}"
    />
  </div>
  <div class="student-view-name text-center">
    <h3>${singleData.name}</h3>
  </div>
  <div class="row mt-3">
    <div class="col-md-6">
      <p class="text-end"><strong> Roll No: </strong> ${singleData.rollno}</p>
    </div>
    <div class="col-md-6">
      <p class="text-start"><strong>Regg No: </strong> ${singleData.regno}</p>
    </div>
  </div>
</div>
  
  `;
};

/**
 * Edit Student Form
 */
const editStudentData = (id) => {
  oldStudent = getLsData("student");
  let data = oldStudent.find((data) => data.id === id);
  editStudentForm.querySelector('input[name="name"]').value = data.name;
  editStudentForm.querySelector('input[name="photo"]').value = data.photo;
  editStudentForm.querySelector('input[name="id"]').value = data.id;
  editStudentForm
    .querySelector("img#prevPhoto")
    .setAttribute("src", data.photo);
};

/**
 * Add Student Result Form Submit
 */
addResultForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if (
    !data.bangla ||
    !data.english ||
    !data.math ||
    !data.science ||
    !data.socialScience ||
    !data.religion
  ) {
    addResultFormAlert.innerHTML = creatAlert("All Fild Is Required", "danger");
  } else {
    oldData = getLsData("student");
    oldData[oldData.findIndex((item) => item.id === data.id)] = {
      ...oldData.find((item) => item.id === data.id),
      result: data,
    };

    setLsData("student", oldData);
    showStudents();

    e.target.reset();
  }
};

/**
 * Edit Student Form Submit
 */
editStudentForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  //Form Validation
  if (!data.name || !data.photo) {
    editFormAlert.innerHTML = creatAlert("All Fild Is Required", "danger");
  } else {
    const getOldData = getLsData("student");

    //Update Old Data To New Data
    getOldData[getOldData.findIndex((item) => item.id === data.id)] = {
      ...getOldData[getOldData.findIndex((item) => item.id === data.id)],
      ...data,
    };

    setLsData("student", getOldData);
    showStudents();
  }
};

/**
 * Create A Student
 */
createStudentForm.onsubmit = (e) => {
  e.preventDefault();

  const forData = new FormData(e.target);
  const data = Object.fromEntries(forData.entries());

  //Form Validation
  if (!data.name || !data.photo || !data.rollno || !data.regno) {
    formAlert.innerHTML = creatAlert("All Fild Is Required", "danger");
  } else if (!isNumber(data.rollno)) {
    formAlert.innerHTML = creatAlert("Ivalid Roll Number", "danger");
  } else if (!isNumber(data.regno)) {
    formAlert.innerHTML = creatAlert("Ivalid Regg Number", "danger");
  } else {
    prevData = getLsData("student");

    if (prevData.some((item) => item.rollno === data.rollno)) {
      formAlert.innerHTML = creatAlert("Roll No Is Already Exist", "danger");
      return;
    }

    if (prevData.some((item) => item.regno === data.regno)) {
      formAlert.innerHTML = creatAlert("Regg No Is Already Exist", "danger");
      return;
    }

    prevData.push({
      ...data,
      result: null,
      createdAt: Date.now(),
      id: getRandomUniqueID(25),
    });

    setLsData("student", prevData);
    e.target.reset();
    showStudents();
  }
};
