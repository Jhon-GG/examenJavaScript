class AbrigosData extends HTMLElement{

    constructor(){
        super();
    }

    async connectedCallback(){
        const index = parseInt(this.getAttribute('index') || 0);
        this.loadArticles('', index)
    }

    async loadArticles(index){
        const url = `http://172.16.101.146:5999/abrigo?id=1`;

        try {
            const response = await fetch(url);
            const result = await response.json();


            if (result.albums.items.length > index) {
                const articlesData = result.articles.items[index].data;
                if (articlesData ==  result) {
                    const img = imagen;
                    const name = nombre;
                    const price = precio;
                    const identification = id;

                    const uri = albumData.uri;
                    const id = uri.split(':')[2];
                    
                this.innerHTML = `
                <style>
                    .main__img14{
                        display: flex;
                        flex-direction: column;
                        border: solid var(--color-primary);
                        width: 23%;
                        height: 100%;
                        border-radius: 5%;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .main__img14 img{
                        display: flex;
                        width: 70%;
                        height: 60%;
                    }
                
                    .main__img14__texto{
                        display: flex;
                        width: 100%;
                        height: 67px;
                        flex-direction: column;
                        font-size: 14px;
                        margin-top: 20px;
                        border-top: solid var(--color-primary);
                        border-bottom-left-radius: 4%;
                        border-bottom-right-radius: 4%;
                        background: var(--color-opacity);
                    }
                    
                    .main__img14__texto p{
                        display: flex;
                        margin-left: 12px;
                        margin-top: 7px;
                    }
                </style>
                <div class="main__img14">
                    <img "${img}" alt="abrigo1">
                    <div class="main__img14__texto">
                        <p>${name}</p>
                        <div class="main__img14__boton">
                            <p>${price}</p>
                        </div>
                    </div>
                </div>
                `;
                }
            } else {
                this.innerHTML = `<p>No results found</p>`;
            }
        } catch (error) {
            console.error(error);
            this.innerHTML = `<p>Error loading abrigos</p>`;
        }
    }
}

customElements.define('abrigos-data', AbrigosData);