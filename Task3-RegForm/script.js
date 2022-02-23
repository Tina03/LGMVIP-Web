var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["rollNo"] = document.getElementById("rollNo").value;
  formData["Name"] = document.getElementById("Name").value;
  formData["Email"] = document.getElementById("Email").value;
  formData["Branch"] = document.getElementById("Branch").value;
  formData["Course"] = document.getElementById("Course").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.rollNo;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Name;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Branch;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Course;

  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("rollNo").value = selectedRow.cells[0].innerHTML;
  document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Branch").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Course").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.collegeName;
  selectedRow.cells[2].innerHTML = formData.Branch;
  selectedRow.cells[3].innerHTML = formData.Mob;
  selectedRow.cells[4].innerHTML = formData.Addr;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("rollNo").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Branch").value = "";
  document.getElementById("Course").value = "";

  selectedRow = null;
}