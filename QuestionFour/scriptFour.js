const changeBgColor = () => {
    let bodyBackground = document.getElementById("bodyId");
    let color = document.forms["form-name"]["body"].value;
    if(color !== "")
        bodyBackground.style.backgroundColor = color;
}