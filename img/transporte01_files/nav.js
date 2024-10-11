var current_nav="",is_mobile_subnav_open=!1,do_load_videos=!0,is_storage_supported=!0,current_theme="light";function is_local_storage_supported(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function replace_themed_images(){"dark"==current_theme?document.querySelectorAll(".has-dark-theme").forEach((e=>{e.setAttribute("src",e.getAttribute("src").replace("/navs","/navs/theme-dark"))})):document.querySelectorAll(".has-dark-theme").forEach((e=>{e.setAttribute("src",e.getAttribute("src").replace("/theme-dark",""))}))}function toggle_theme(){"light"==current_theme?(document.querySelector("body").classList.add("digi-dark-theme"),current_theme="dark",localStorage.setItem("digi-theme",current_theme),document.body.contains(document.getElementById("darkmode-switch"))&&(document.getElementById("darkmode-switch").checked=!0)):(document.querySelector("body").classList.remove("digi-dark-theme"),current_theme="light",localStorage.setItem("digi-theme",current_theme),document.body.contains(document.getElementById("darkmode-switch"))&&(document.getElementById("darkmode-switch").checked=!1)),replace_themed_images()}function check_theme(){is_local_storage_supported&&(null===localStorage.getItem("digi-theme")?localStorage.setItem("digi-theme",current_theme):current_theme=localStorage.getItem("digi-theme"),"dark"==current_theme&&(document.querySelector("body").classList.add("digi-dark-theme"),document.body.contains(document.getElementById("darkmode-switch"))&&(document.getElementById("darkmode-switch").checked=!0)),replace_themed_images())}function digi_site_ready(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&e()}))}function load_videos(){var e=document.createElement("script");e.src="https://www.digi.com/js/nav-videos",document.head.appendChild(e)}function change_language(e){const t=new URL(window.location),n=t.toString().substring(t.origin.length);"de"==e?-1==window.location.toString().indexOf("de.digi.com")&&(window.location="https://de.digi.com"+n):"es"==e?-1==window.location.toString().indexOf("es.digi.com")&&(window.location="https://es.digi.com"+n):"zh"==e?-1==window.location.toString().indexOf("zh.digi.com")&&(window.location="https://zh.digi.com"+n):"fr"==e?-1==window.location.toString().indexOf("fr.digi.com")&&(window.location="https://fr.digi.com"+n):-1==window.location.toString().indexOf("www.digi.com")&&(window.location="https://www.digi.com"+n)}function setup_language_switcher(){document.body.contains(document.getElementById("digi-languages"))&&(-1!=window.location.toString().indexOf("de.digi.com")?document.getElementById("digi-languages").value="de":-1!=window.location.toString().indexOf("es.digi.com")?document.getElementById("digi-languages").value="es":-1!=window.location.toString().indexOf("zh.digi.com")?document.getElementById("digi-languages").value="zh":-1!=window.location.toString().indexOf("fr.digi.com")?document.getElementById("digi-languages").value="fr":document.getElementById("digi-languages").value="en")}function setup_initial_tabindex(){document.querySelectorAll(".digi-dropdown a").forEach((e=>{e.tabIndex=-1})),document.querySelector("#digi-q").tabIndex=-1}function setup_new_tabindex(e){setup_initial_tabindex(),document.querySelectorAll(e+" .digi-dropdown a").forEach((e=>{e.tabIndex=0})),"#digi-nav-search"==e&&(document.querySelector("#digi-q").tabIndex=0)}function setup_nav_skip(){document.getElementById("skip-to-footer").addEventListener("click",(e=>(e.preventDefault(),document.querySelector("#digi-footer a").focus(),!1))),document.getElementById("skip-to-search").addEventListener("click",(e=>(e.preventDefault(),toggle_digi_nav_item("#digi-nav-search"),!1))),document.getElementById("skip-to-content").addEventListener("click",(e=>(e.preventDefault(),document.querySelector("#digi-nav").nextElementSibling.tabIndex=0,document.querySelector("#digi-nav").nextElementSibling.focus(),!1)))}function reset_digi_nav(e){e&&document.querySelector("#digi-menu").setAttribute("data-state","closed"),document.querySelector("#digi-nav-search").setAttribute("data-state","closed"),document.querySelector("#digi-nav-search #digi-nav-search-link").setAttribute("aria-expanded","false"),document.querySelectorAll("#nav-lower li:not(.digi-mobile)").forEach((e=>{e.setAttribute("data-state","closed"),e.classList.remove("hide")})),document.querySelectorAll("#nav-lower li:not(.digi-mobile) > a").forEach((e=>{e.setAttribute("aria-expanded","false")})),document.querySelectorAll(".digi-dropdown h5").forEach((e=>{e.classList.remove("show")})),is_mobile_subnav_open=!1}function check_mobile_subnav_open(){window.screen.width<=992&&(is_mobile_subnav_open?(document.querySelectorAll("#nav-lower li[data-state=closed]").forEach((e=>{e.classList.add("hide")})),document.querySelectorAll(".digi-mobile").forEach((e=>{e.classList.add("hide")}))):(document.querySelectorAll("#nav-lower li").forEach((e=>{e.classList.remove("hide")})),document.querySelectorAll(".digi-mobile").forEach((e=>{e.classList.remove("hide")}))))}function toggle_digi_nav_item(e){reset_digi_nav(!1),e!=current_nav?(current_nav=e,document.querySelector(e).setAttribute("data-state","open"),"#digi-nav-search"!=e&&document.querySelector(e+" > a").setAttribute("aria-expanded","true"),setup_new_tabindex(e),is_mobile_subnav_open=!0,"#digi-nav-search"==e&&(document.querySelector("#digi-menu").setAttribute("data-state","closed"),document.querySelector("#digi-q").focus(),is_mobile_subnav_open=!1),"#digi-nav-resources"==e&&do_load_videos&&load_videos()):(current_nav="",is_mobile_subnav_open=!1,setup_initial_tabindex()),check_mobile_subnav_open()}function setup_digi_nav(){document.querySelector("#digi-nav-search #digi-nav-search-link").addEventListener("click",(e=>(e.preventDefault(),toggle_digi_nav_item("#digi-nav-search"),!1))),document.querySelectorAll("#nav-lower li:not(.digi-mobile) > a").forEach((e=>{e.addEventListener("click",(t=>(t.preventDefault(),toggle_digi_nav_item("#"+e.parentElement.getAttribute("id")),!1)))})),document.querySelector("#digi-q").addEventListener("keypress",(e=>{13==e.keyCode&&(e.preventDefault(),-1!=window.location.toString().indexOf("de.digi.com")?window.location="https://de.digi.com/search/results?q="+encodeURIComponent(document.querySelector("#digi-q").value):-1!=window.location.toString().indexOf("es.digi.com")?window.location="https://es.digi.com/search/results?q="+encodeURIComponent(document.querySelector("#digi-q").value):-1!=window.location.toString().indexOf("zh.digi.com")?window.location="https://zh.digi.com/search/results?q="+encodeURIComponent(document.querySelector("#digi-q").value):-1!=window.location.toString().indexOf("fr.digi.com")?window.location="https://fr.digi.com/search/results?q="+encodeURIComponent(document.querySelector("#digi-q").value):window.location="https://www.digi.com/search/results?q="+encodeURIComponent(document.querySelector("#digi-q").value))})),setup_nav_skip(),setup_language_switcher(),null!==document.getElementById("copyright-year")&&(document.getElementById("copyright-year").innerHTML=(new Date).getFullYear())}function setup_mobile_nav_menu(){document.querySelector("#digi-menu").addEventListener("click",(e=>(e.preventDefault(),reset_digi_nav(),"open"==document.querySelector("#digi-menu").getAttribute("data-state")?document.querySelector("#digi-menu").setAttribute("data-state","closed"):(document.querySelector("#digi-menu").setAttribute("data-state","open"),current_nav=""),!1))),window.screen.width<993&&document.querySelectorAll("h5.has-submenu > a").forEach((e=>{e.addEventListener("click",(t=>(t.preventDefault(),e.parentElement.classList.contains("show")?e.parentElement.classList.remove("show"):e.parentElement.classList.add("show"),!1)))}))}function setup_arrow_keys(){window.addEventListener("keydown",(e=>32==e.keyCode?(e.preventDefault(),-1!=document.activeElement.parentElement.getAttribute("id").indexOf("digi-nav-")&&document.activeElement.parentElement.parentElement.querySelector("li[data-state=closed] > a").focus(),!1):40==e.keyCode?(e.preventDefault(),!1):void 0))}function setup_close_nav_blur(){window.addEventListener("click",(e=>{e.target.closest("#digi-nav")||(reset_digi_nav(!0),current_nav="")}))}digi_site_ready((function(){document.body.contains(document.getElementById("digi-nav"))&&document.body.contains(document.getElementById("digi-footer"))&&(console.log("nav present"),setup_digi_nav(),setup_mobile_nav_menu(),setup_initial_tabindex(),setup_close_nav_blur(),check_theme())}));