import { useState } from "react";
function Questao02() {
    const url_frente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const url_costa = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    const [estado, setEstado] = useState(0)
    const [url, setUrl] = useState(url_frente)

    //Para essa questao usei o estados
    //Para o pokemon de frente uso o estado 0 e 1 para costa
    //Verifico o estado e mudo o valor quando clico no botão atraves do evento OnClick
    //alterando a url
    const virar = () => {
        if(estado === 0) {
            setEstado(1)
            setUrl(url_costa)
        }

        if(estado === 1) {
            setEstado(0)
            setUrl(url_frente)
        }
    }
    return(
        <>
        <h2>Questão 2</h2>    
        <img src={url} alt="Imagem Pokémon" />
        <button
        onClick={() => virar()}
        >Virar</button>
        </>
    );
}

export {Questao02}