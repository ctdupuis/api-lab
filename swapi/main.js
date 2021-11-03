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
        <div class="profile-card">
            <h2 class="name">${name}</h2>
            <h4 class="gender">Gender: ${gender}</h4>
            <span class="hair-color">Hair color: ${hair_color}</span>
            <span class="height">Height in cm: ${height}</span>
            <span class="mass">Mass in kg: ${mass}</span>
            <span class="skin-color">${skin_color}</span>
        </div>
    `
    target.innerHTML += html;
}