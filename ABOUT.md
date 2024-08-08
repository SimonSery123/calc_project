# Aplikace kalkulačka

## Použité technologie:

Pro tuto aplikace jsem použil *javaScriptový* framework **React** a *CSS* framework **Tailwind**.

## Proč tyto technologie?

S Tailwind CSS jsem se seznámil při tvorbě frontendu jednoho rozsáhlejšího projektu jakožto alternativu k Bootstrapu, který mi přišel málo přizpůsobitelný.
K tomuto projektu jsem jej využil především kvůli jeho snadné implementaci přímo jako className jednotlivých tagů díky které není nutné používat separátní CSS soubory. 

React je jeden z nejpoužívanějších JS frameworků dnešní doby, především díky možnosti lepší strukturalizace kódu, tvorbě znovu použitelných komponentů a díky JSX a virtual DOM možnosti tvořit interaktivní single-page aplikace.
Pro tento projekt se React hodil v tom, že jsem si mohl svůj kód rozdělit na components složku, ze které jsem si naimportoval jednotlivé části (tlačítka, obrazovku) do App.js, souboru obsahujícího aplikační logiku (eventListenery a funkce) a vracejícího kompoletní DOM strukturu do souboru index.js, který potom renderuje do index.html.
Tento přístup mi umožnil se v kódu nejen lépe orientovat, ale také lépe odhalit chyby, které se při vývoji objevili a lépe (přehledněji) implementovat Tailwind CSS třídy,
které mohou v mnoha případech působit poměrně 'verbose' (objemně).

## Struktura kódu

Vysvětlení konkrétních implementací je popsáno v App.js pomocí komentářů, jednotlivé komponenty jsou tvořeny jako standardní React JSX, tedy jako Arrow function:

import something from './example/';

const Exapmle = () => {
    <div>.//placeholedr</div>
}; 

export default Example;

Je tedy vytvořena funkce, která nese JSX kód a je následně vyexportována dále v rámci struktury projektu. V tomto případě jsou definované komponenty importovány do App.js,
kde proběhne potřebná logika a strukturace finálního DOM (opět v rámci funkce const App = () => {content};), následně je expotována (export default App;) do index.js, který již renderuje virtual DOM (ReactDOM.render()) do index.html templaty (<div id='root'></div>). 

konkrétní popis jednotlivých funkcí je k vidění v souboru App.js, případně pak v rámci obhajoby. Tailwind CSS classes popsány nejsou, můžu popsat v rámci obhajoby.