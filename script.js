const $ = (id) => document.getElementById(id);
const $$ = (a, b, c) => a.addEventListener(b, c);

const botaoDarkMode = $("dark-mode-button");
$$(botaoDarkMode, "click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});





console.log($("dark-mode-button"));
