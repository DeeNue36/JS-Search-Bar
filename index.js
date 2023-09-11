//SetTimeout unit: milliseconds

// function salutation() {
//     alert("hello user");
// }


function salutation(message, firstuser) {
    alert(message + ', ' + firstuser);
}

// 1000ms = 1 second so 3000 = 3 seconds
setTimeout(salutation, 3000, "Hello", "First User");

// setTimeout(() => alert("Hello", "User"), 5000);

// let salutations = setTimeout(() => alert("Hello", "User"), 5000);
// clearTimeout(salutation);

// let salute = setInterval(() => alert("What's Up"), 5000);
// clearInterval(salute);

const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search() {
    const inputVal = input.value;
    const li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}