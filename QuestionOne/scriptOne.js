const setLinkColor = () => {
  let color = prompt("Enter a color for a link: ");

  let links = document.getElementsByTagName("a");

    for (let index = 0; index < links.length; index++)
        links[index].style.color = color;
}