const code = document.getElementById("code");
const more = document.getElementById("more");
const addURL = document.getElementById("addVideo")
const input = document.getElementById("input")

const runCode = () =>{
    const js = code.value;
    console.log(js)
};
const addVideo = () =>{
    addURL.style.visibility = "visible"
    addURL.style.position = "relative"
    addURL.style.width = "100%"
    more.style.width = "70px"
    more.style.height = "100%"
    more.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
}

const focusOut = () =>{
    addURL.style.visibility = "hidden"
    addURL.style.position = "absolute"
    more.style.width = "40px"
    more.style.width = "100%"
    more.textContent = "+"
}

code.addEventListener("input", runCode);
more.addEventListener("click", addVideo)
input.addEventListener("focusout", focusOut)
