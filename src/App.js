import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [ //2D array s hodnotami tlačítek
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "=", "C", "/"],
];

const App = () => {
  const [calc, setCalc] = useState({ //setter a getter funkcionalita pomocí Recat useState hooku
    sign: "",
    num: "0",
    res: 0,
  });

  const numClickHandler = (e) => { //funkce pro číselná tlačítka
    e.preventDefault();  //prevence defaultního chování prohlížeče (např. probliknutí obrazovky po odeslání formuláře atd.)
    const value = e.target.innerHTML; //nastavení hodnoty value na vniřní html tlačítka (eventu)
   
    if (calc.num.length < 16) { //maximální délka čísel na obrazovku
      setCalc({ //nastavení Calc objektu
        ...calc, //destructurizace Calc atributů
        num: //pro atribut num:
                /*pokud jsou atributy num a value rovné 0 znamená,
                že uživatel zadává 0, je tedy num nastaveno na hodnotu 0. Pokud je předchozí výsledek false,
                num bude nastaveno jako value. Pokud proběhne kontrola zda je num rovno 0. Pokud ano, num bude nastaveno na hodnotu value, pokud ne,
                num bude nastaveno jako součet num + value */
          calc.num === "0" && value === "0" 
            ? "0"
            : calc.num === "0"
            ? value
            : calc.num + value,
            //Pokud uživatel nezadá symbol, res bude nastaveno na 0, v opačném případě je výsledek zaznamenán jako res.
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const signClickHandler = (e) => { //funkce pro symboly
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? Number(calc.num) : calc.res,
      num: "0",
    });
  };

  const equalsClickHandler = () => {  //funkce pro "="
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => //metoda pro výpocet výsledku
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign), /*použití metody math() pro výpočet výsledku a následné přiřazení výsledku atributu res
                                                                    (který ma v tuto chvíli hodnotu prvního zadaného čísla). atributy sign a res jsou resetovány.*/
        sign: "",
        num: "0",
      });
    }
  };

  const resetClickHandler = () => { //funkce pro "C" (vymazání hodnot)
    setCalc({
      ...calc,
      sign: "",
      num: "0",
      res: 0,
    });
  };

  return (  //zde se renderuje virtualní DOM
    <Wrapper>
      <Screen value={calc.num !== "0" ? calc.num : calc.res.toString()} /> {/*renderuje výsledek na obrazovku pomocí ternary operatoru*/}
      <ButtonBox>
        {btnValues.flat().map((btn, i) => { //btnValues je 2D array, metoda flat() převede na standardní 1D array. map() potom přiřadí ke kazdemu tlačítku spravnou funkci
          return (
            <Button
              key={i} //index tlačítka (generovaný v map())
              value={btn}
              onClick={ //eventListener s logikou rozřazení funkcí pro správná tlačítka (pomocí ternary operatoru)
                btn === "C"
                  ? resetClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : numClickHandler 
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;  //exportování app na index.js
