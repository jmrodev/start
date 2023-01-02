/* Fetch API */

const imageDiv = document.querySelector('.image');
const url = new URL("https://api.unsplash.com/search/photos?");

window.addEventListener('load', loadImg);

function contruirUrl() {
    let taza = 'coffee'
    let items_for_page = '20';
    let id_ = 'gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k'
    url.searchParams.append('query', taza);
    url.searchParams.append('per_page', items_for_page);
    url.searchParams.append('client_id', id_);
}

contruirUrl();

function loadImg() {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                if (data.results[i].id == "6VhPY27jdps") {
                    let imageElement = document.createElement('img');
                    imageElement.src = data.results[i].urls.thumb;
                    imageDiv.append(imageElement);
                }
            }
        });
}
