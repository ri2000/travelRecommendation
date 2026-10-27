function searchResults(){
    const keyword = document.getElementById('input').value.toLowerCase().trim();
    if (keyword === "beach" || keyword === "beaches"){
        const info = document.getElementById('information');
        fetch('./travel_recommendation_api.json')
        .then(async response => {

            if (!response.ok){
                throw new Error("Could not get the reponse from the json file...");
            }
            return response.json();
        })
        .then(data =>{
            info.innerHTML = "";
            const heading = document.createElement('h1');
            heading.innerText = "Search Results";
            info.appendChild(heading);

            document.getElementById('content').style.maxWidth = '100%';
            var html_content = "";
            html_content += `<div id="result">`;
            data.beaches.forEach(beach => {
                html_content += `<div class="card">
                                        <img src=${beach.imageUrl}>
                                        <h2>${beach.name}</h2>
                                        <p>${beach.description}</p>
                                    </div>`;
            })
            html_content += "</div>";
            info.innerHTML = html_content;
        })
        .catch(error =>{
            console.log(`Error: ${error}`);
        });
    }
    else if(keyword === "country" || keyword === "countries"){
        const info = document.getElementById('information');
        var cards = [];
        fetch('./travel_recommendation_api.json')
        .then(async response => {

            if (!response.ok){
                throw new Error("Could not get the reponse from the json file...");
            }
            return response.json();
        })
        .then(data =>{
            info.innerHTML = "";
            const heading = document.createElement('h1');
            heading.innerText = "Search Results";
            info.appendChild(heading);

            var html_content = "";
            document.getElementById('content').style.maxWidth = '100%';
            html_content += `<div id="result">`;
            data.countries.forEach(country => {
                country.cities.forEach(city =>{
                    html_content += `<div class="card">
                                        <img src=${city.imageUrl}>
                                        <h2>${city.name}</h2>
                                        <p>${city.description}</p>
                                    </div>`;
                })
            })
            html_content += "</div>";
            info.innerHTML = html_content;
        })
        .catch(error =>{
            console.log(`Error: ${error}`);
        });
    }
    else if(keyword === "temple" || keyword === "temples"){
        const info = document.getElementById('information');
        var cards = [];
        fetch('./travel_recommendation_api.json')
        .then(async response => {

            if (!response.ok){
                throw new Error("Could not get the reponse from the json file...");
            }
            return response.json();
        })
        .then(data =>{
            info.innerHTML = "";
            const heading = document.createElement('h1');
            heading.innerText = "Search Results";
            info.appendChild(heading);

            var html_content = "";
            document.getElementById('content').style.maxWidth = '100%';
            html_content += `<div id="result">`;
            data.temples.forEach(temple => {
                html_content += `<div class="card">
                                        <img src=${temple.imageUrl}>
                                        <h2>${temple.name}</h2>
                                        <p>${temple.description}</p>
                                    </div>`;
            })
            html_content += "</div>";
            info.innerHTML = html_content;
        })
        .catch(error =>{
            console.log(`Error: ${error}`);
        });
    }
    else{
        alert(`The keyword enetered: ${keyword}, is not supported. Enter beach/es, temple/s or country/countries`);
        
        return;
    }
}

function clearResults(){
    document.getElementById('input').value = "";
    document.getElementById('information').innerHTML = `<h1>Explore Dream Destination</h1><br>
    <p>The travel Recommendation helps users explore 
    popular travel destinations through an interactive and user friendly interface. 
    It allows users to search for beaches, temples, countries, 
    or specific country names to view related cities along with
    images and descriptions. The app dynamically fetches data from a
    structured JSON file to display relevant results. It provides
    a simple and efficient way to discover and plant travel destinations.</p><br>
    <button id="bookingbtn" onclick="">Book Now</button>`;
}

