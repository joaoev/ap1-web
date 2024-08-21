import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    const [maiorCapital, setMaiorCapital] = useState(null);
    const [menorCapital, setMenorCapital] = useState(null);

    useEffect(() => {
        const fetchCapitals = async () => {
        
            try {
                //Aqui usei o fetch para fazer requisição e armazernar a response em data
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                const data = await response.json();

                // Encontra a capital com a maior e menor população e altero o valor de estado
                //Uso para iterar sobre os dados e encontrar o maior e a menor valor 
                const maior = data.reduce((max, country) => country.population > max.population ? country : max, data[0]);
                const menor = data.reduce((min, country) => country.population < min.population ? country : min, data[0]);

                //Altero os valores para cada capital
                setMaiorCapital(maior.capital[0]);
                setMenorCapital(menor.capital[0]);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchCapitals();
    }, []);

    return (
        <div>
            <h2>Questão 3</h2>
            <h3>Capitais</h3>
            <p>Maior população: {maiorCapital}</p>
            <p>Menor população: {menorCapital}</p>
        </div>
    );
}

export default Questao03;
