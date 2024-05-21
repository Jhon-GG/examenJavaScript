class AgregarAbrigo extends HTMLElement{
    constructor(){
        super();
    }

    async connectedCallback(){
        const index = parseInt(this.getAttribute('index') || 0);
        this.loadArticles('', index)
    }

    async loadArticles(index){
        const url = `http://172.16.101.146:5999/abrigo`;

        try {
            const response = await fetch(url, options);
            const result = await response.json();

            if (items.length > index) {
                const articlesData = result.albums.items[index].data;
                if (articlesData == result) {
                    const uri = articlesData.uri;
                    const id = uri.split(':')[2];
                    this.innerHTML = `
                        <style>
                            .main__img14__boton button{
                                display: flex;
                                border: none;
                                padding-right: 5px;
                                padding-left: 5px;
                                padding-top: 2px;
                                padding-bottom: 2px;
                                margin-right: 12px;
                                font-size: 13px;
                                background: var(--color-primary);
                                color: var(--color-light);
                                transition: all 0.3s ease;
                            }
                            
                            .main__img14__boton button:hover{
                                cursor: pointer;
                                transform: scale(1.1);
                            }
                        </style>
                            <button>Agregar</button>
                        `;
                }
            } else {
                this.innerHTML = `<p>No results found</p>`;
            }
        } catch (error) {
            console.error(error);
            this.innerHTML = `<p>Error loading albums</p>`;
        }
    }
}

customElement("agregar-abrigo",  AgregarAbrigo);




// class AlbumImages extends HTMLElement {
//     constructor() {
//         super();
//     }

//     async connectedCallback() {
//         const index = parseInt(this.getAttribute('index')) || 0;
//         this.loadAlbums('coldplay', index);
//     }

//     async loadAlbums(searchTerm, index) {
//         const codeBase = searchTerm.replace(/\s/g, '%20');
//         const url = `https://spotify23.p.rapidapi.com/search/?q=${codeBase}&type=albums&offset=0&limit=10&numberOfTopResults=5`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '4bf484647amshd1c44537dbe303ep198f76jsn711bb15d5d57',
//                 'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();

//             if (result.albums.items.length > index) {
//                 const albumData = result.albums.items[index].data;
//                 if (albumData && albumData.coverArt && albumData.coverArt.sources.length > 0) {
//                     const primeraUrl = albumData.coverArt.sources[0].url;
//                     const uri = albumData.uri;
//                     const id = uri.split(':')[2];
//                     this.innerHTML = `
//                         <img id="album__${index + 1}" src="${primeraUrl}" alt="" data-id="${id}">
//                     `;

//                     this.querySelector('img').addEventListener('click', () => {
//                         const myFrame = document.querySelector('my-frame');
//                         myFrame.setAttribute('uri', `spotify:album:${id}`);
//                         const AlbumTracksComponent = document.querySelector('.trackList');
//                         AlbumTracksComponent.setAttribute('uri', `spotify:album:${id}`);
//                     });
//                 }
//             } else {
//                 this.innerHTML = `<p>No results found</p>`;
//             }
//         } catch (error) {
//             console.error(error);
//             this.innerHTML = `<p>Error loading albums</p>`;
//         }
//     }
// }

// customElements.define('album-images', AlbumImages);