const subFeatures = document.getElementById("features_submenu")
const subCompany = document.getElementById("company_submenu")
const arrowFeatures = document.getElementById("arrow_features")
const arrowCompany = document.getElementById("arrow_company")
// const options = document.getElementsByTagName("span")
// const optionsMainMenu =Array.from (options)
const navBarr = document.getElementById("nav_barr")
const body = document.getElementsByTagName("body")[0]

if (window.innerWidth > 1024){
    resetView()
}

function optionSelected (s){

    switch (s){
        case 1:
            subFeatures.classList.toggle("show");
            arrowFeatures.classList.toggle("rotate");
            break;
        case 2:
            subCompany.classList.toggle("show");
            arrowCompany.classList.toggle("rotate");
            break;
    }

}

function displaySideBarr(){
    navBarr.classList.add("show")
    body.classList.add("show_bg")
    resetView()
}

function hideSideBarr(){
    navBarr.classList.remove("show")
    body.classList.remove("show_bg")
}

function resetView(){
    subFeatures.classList.remove("show");
    arrowFeatures.classList.remove("rotate");
    subCompany.classList.remove("show");
    arrowCompany.classList.remove("rotate");
}