const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);

var element = document.getElementById("questionBtn").addEventListener("click", function()){
    alert("hello world")
};
element.onclick = function (answerQustion) {
    alert("hello world")
}