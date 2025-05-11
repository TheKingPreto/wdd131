const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const modifiedPara = document.getElementById("lastModified");
if (modifiedPara) {
    modifiedPara.textContent = `Last modified: ${document.lastModified}`;
}
