window.onload = function() {
    var btn = document.querySelector('.btn');    

    btn.addEventListener('click', function(item) {
        item.preventDefault();
        ajaxGet();
    });
}
var cityListEl = document.querySelector('.city-list');

// clar old city list 
function clear () {  
    cityListEl.innerHTML= '';    
}

// create city list 
function render (item) {      
    var div = document.createElement('div');
    div.className = 'city';
    div.innerHTML = `<strong class="cite__name">${item.city_name}</strong> 
                    <img class="cite__picture" src="${item.image_url}"/>`;     
    cityListEl.appendChild(div);
}

function renderOther (item) {
    var city = document.querySelector('.cityother');
    
    city.innerHTML += `<div><h2>${item.city_name}</h2></div>`;
}


function ajaxGet () {
    var xhr = new XMLHttpRequest (); 
    xhr.onreadystatechange =  function() {
       if(xhr.readyState == 4 && xhr.status == 200) {
        clear();
        var locations = JSON.parse(xhr.response);         
        locations.forEach(function (location) {
            if(location.country =="Russian Federation") {            
            render(location);
            } else if (location.country =="United States of America") {
                renderOther(location);
            }
        });
       }
    };
    xhr.open('GET', "../locations.json");
    xhr.setRequestHeader("X-RapidAPI-Host", "apidojo-booking-v1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "1b0e442584msh4cd153768d0eec3p1dc04cjsn664d2bd185ed");
    xhr.send();
}