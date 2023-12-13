const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
const toggle = document.getElementById("toggle");
const html = document.children[0];
let colorScheme;

const setColorScheme = e => {
    if (e.matches) {
        colorScheme = "dark";
    } else {
        colorScheme = "light";
    }
    html.setAttribute("data-theme", colorScheme);
};

setColorScheme(colorSchemeQueryList);

colorSchemeQueryList.addEventListener("change", setColorScheme);

toggle.addEventListener("click", (e) => {
    if(colorScheme == "light") {
        colorScheme = "dark";
    } else {
        colorScheme = "light";
    }
    html.setAttribute("data-theme", colorScheme);
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");
let output;

result.innerHTML = "";
result.innerText = "-- Click generate to generate pig latin --";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let latin = input.value;
    let pig = pigLatin(latin);

    if(!output) {
        result.innerHTML = "";
        result.append("The pig latin is ");
        output = document.createElement("strong");
        result.appendChild(output);
        document.body.appendChild(result);
    }

    output.innerText = pig;
});
