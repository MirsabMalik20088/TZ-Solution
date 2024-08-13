export function validateForm() {
  console.log("sd");
  const name = document.getElementById("firstname").value;
  const lname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const help = document.getElementById("help").value;


  if (name === "" || /\d/.test(name)) {
    toastr.error('Please enter first name.');
    return false;
  }

  if (lname === "") {
    toastr.error('Please enter last name.');
    return false;
  }

  if (email === "" || !email.includes("@")) {
    toastr.error('Please enter email.');
    return false;
  }

  if (help === "") {
    toastr.error('Please enter information correctly.');
    return false;
  }

  return true;
}