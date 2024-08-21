const Questao01A = () => {
    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
        ]        
    return (
        //Aqui passamos a lista para o outro componente
        <div>
            <h1>AP1 - João Evangelista</h1>
            <h2>Questão 01</h2>
            
            <Questao01B lista={lista}/>
        </div>
    )
}

//Na props desse componente fazemos a destruturalização da prop que é passada
function Questao01B ({lista}) {
    //Extraimos cada elento da lista com ...Object.values(elemento) e pegamos o valor máximo de 
    //cada elemento com Math.max
    const maioresElementos = lista.map(elemento => Math.max(...Object.values(elemento)));

    //E agora é so imprimir os valores que foram armazenados em maioresElementos.
    return (
        <div>
            <h3>Maiores Elementos</h3>
            <ul>
                {maioresElementos.map((maior, index) => (
                    <li key={index}>{index + 1}: {maior}</li>
                ))}
            </ul>
        </div>
    );
}

export {Questao01A, Questao01B}