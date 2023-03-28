const display = () => {
    let formBox = document.getElementById("formId");
    let display = document.getElementById("displayPanelId");
    let firstName = document.forms["examination"]["first"].value;
    let lastName = document.forms["examination"]["last"].value;

    if(firstName !== "" && lastName !== "") {
        formBox.style.height = "23em";
        display.innerHTML = "<br><h3>Display Results</h3><br>First Name: " + firstName + "<br>Last Name: " + lastName + "<br>";
    }
    else
        formBox.style.height = "15em";
}