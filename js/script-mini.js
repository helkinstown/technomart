var link=document.querySelector(".button-write-us"),popup=document.querySelector(".modal-message"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),username=popup.querySelector("[name=username]"),email=popup.querySelector("[name=email]"),storage=localStorage.getItem("email");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(username.value=storage,email.focus()):username.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){username.value&&email.value?localStorage.setItem("username",username.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});var mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".modal-map"),mapClose=popup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show")});var cartLink=document.querySelector(".buy"),cartPopup=document.querySelector(".modal-cart"),cartClose=popup.querySelector(".modal-close");cartLink.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-show")}),cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cartPopup.classList.contains("modal-show")&&cartPopup.classList.remove("modal-show")});