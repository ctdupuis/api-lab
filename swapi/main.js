let resBtn = document.getElementById("get-res");

getResidentData = () => {
    axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then(res => {
        let residents = res.data.results[0].residents;
        return residents.map(url => {
            return axios
                .get(url)
                .then(res => renderData(res.data));
        })
    })
};

resBtn.addEventListener('click', getResidentData);

renderData = data => {
    let { name, gender, hair_color, height, mass, skin_color } = data;
    const target = document.getElementById("target");
    let html = 
    `
        <div class="profile-card flex-cont spaced col">
            <h2 class="name">${name}</h2>
            <div class="flex-cont spaced spaced-top">
                <h4>Gender:</h4><h4> ${gender}</h4>
            </div>
            <div class="flex-cont spaced spaced-top">
                <div class="spaced-top">Hair color: </div><div class="spaced-top">${hair_color}</div>
            </div>
            <div class="flex-cont spaced spaced-top">
                <div class="spaced-top">Height in cm: </div><div class="spaced-top">${height}</div>
            </div>
            <div class="flex-cont spaced spaced-top">
                <div class="spaced-top">Mass in kg: </div><div class="spaced-top">${mass}</div>
            </div>
            <div class="flex-cont spaced spaced-top">
                <div class="spaced-top"> Skin color: </div><div class="spaced-top">${skin_color}</div>
            </div>
        </div>
    `
    target.innerHTML += html;
}