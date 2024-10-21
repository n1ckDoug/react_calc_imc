import { useState, useEffect } from "react";

import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const resultado = () => {
        const resultado = peso / (altura * altura);
        const imc = resultado.toFixed(2);

        if (!altura && !peso) {
            return (
                <>
                    <p></p>
                </>
            )
        } else {
            if (imc < 16) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p className={styles.seuIMC}>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else if (imc >= 16 && imc <= 16.9) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p className={styles.seuIMC}>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else if (imc >= 17 && imc <= 18.5) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p className={styles.seuIMC}>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else if (imc >= 18.6 && imc <= 24.9) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p className={styles.seuIMC}>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else if (imc >= 25 && imc <= 29.9) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p className={styles.seuIMC}>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else if (imc >= 30 && imc <= 34.9) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p className={styles.seuIMC}>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            }
            else if (imc >= 35 && imc <= 39.9) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p className={styles.seuIMC}>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            }
            else if (imc >= 40) {
                return (
                    <>
                        <h1>seu IMC é: {imc}</h1>
                        <p>resultados menores que 16 — magreza grave;</p>
                        <p>resultados entre 16 e 16, 9 — magreza moderada;</p>
                        <p>resultados entre 17 e 18, 5 — magreza leve;</p>
                        <p>resultados entre 18, 6 e 24, 9 — peso ideal;</p>
                        <p>resultados entre 25 e 29, 9 — sobrepeso;</p>
                        <p>resultados entre 30 e 34, 9 — obesidade grau I;</p>
                        <p>resultados entre 35 e 39, 9 — obesidade grau II ou severa;</p>
                        <p className={styles.seuIMC}>resultados maiores do que 40 — obesidade grau III ou mórbida.</p>
                    </>
                )
            } else {
                <p>Erro</p>
            }
        }

    }

    return (
        <div className="container">
            <form className={styles.form}>
                <div className={styles.border}>
                    <h1 className={styles.h1}>Calcule IMC</h1>
                    <input type="number" placeholder="Digite sua altura" onChange={e => setAltura(parseFloat(e.target.value))} />
                    <input type="number" placeholder="Digite seu peso" onChange={e => setPeso(parseFloat(e.target.value))} />
                    <div className={styles.resultado}>
                        {resultado()}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario;