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
  formData["studentName"] = document.getElementById("studentName").value;
  formData["Mob"] = document.getElementById("Mob").value;
  formData["Branch"] = document.getElementById("Branch").value;
  formData["Course"] = document.getElementById("Course").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.rollNo;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.studentName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Mob;
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
  document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Mob").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Branch").value = selectedRow.cells[3].innerHTML;
  document.getElementById("Course").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.rollNo;
  selectedRow.cells[1].innerHTML = formData.studentName;
  selectedRow.cells[2].innerHTML = formData.Mob;
  selectedRow.cells[3].innerHTML = formData.Branch;
  selectedRow.cells[4].innerHTML = formData.Course;
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
  document.getElementById("studentName").value = "";
  document.getElementById("Mob").value = "";
  document.getElementById("Branch").value = "";
  document.getElementById("Course").value = "";

  selectedRow = null;
}