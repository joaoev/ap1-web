import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    const [maiorCapital, setMaiorCapital] = useState(null);
    const [menorCapital, setMenorCapital] = useState(null);

    useEffect(() => {
        const fetchCapitals = () => {
            //Criando a promessa para fazer requisição fetch e processa os dados.
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                    const data = await response.json();

                    // A explicao esta na 03
                    const maior = data.reduce((max, country) => country.population > max.population ? country : max, data[0]);
                    const menor = data.reduce((min, country) => country.population < min.population ? country : min, data[0]);
                    
                    //Chamo quando quando a operação assíncrona é bem-sucedida, passando os resultados.
                    resolve({ maiorCapital: maior.capital[0], menorCapital: menor.capital[0] });
                } catch (error) {
                    //É chamado quando ocorre um erro, passando o erro.
                    reject(error);
                }
            });
        };

        //A Promise é consumida usando .then() para lidar com o resultado e .catch() para capturar os erros
        fetchCapitals()
            .then(({ maiorCapital, menorCapital }) => {
                setMaiorCapital(maiorCapital);
                setMenorCapital(menorCapital);
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            });
    }, []);
    
    return (
        <div>
            <h2>Questão 4</h2>
            <h3>Capitais - Usando Promise</h3>
            <p>Maior população: {maiorCapital}</p>
            <p>Menor população: {menorCapital}</p>
        </div>
    );
}

export default Questao04;
