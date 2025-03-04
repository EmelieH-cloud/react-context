import { createContext, useContext } from "react";
import React, { useState} from "react";


// 1. Skapa kontexten ----------------------------
const myContext = createContext(undefined);

/*
createContext() skapar en context som kan liknas vid en behållare där vi kan lagra och dela data
i vår app. Detta är ett sätt att hantera så kallat "globalt state".

Kontexten har en färdig property på sig: Provider.
 
 Providern har två viktiga uppgifter:
 1. Att bestämma vilket värde som ska finnas i "lådan" (det vill säga vilket data som ska delas).
 2. Att bestämma vilka komponenter som ska få tillgång till det delade värdet i kontexten.

Sidospår: Varför gör man ibland en egen Provider-komponent istället för att bara använda `myContext.Provider` direkt?
Anledningen till att man ofta skapar en egen Provider-komponent är att det inte bara handlar om att dela data.
I många fall behöver man hantera eller bearbeta data innan man delar det med andra komponenter.
*/

// 2. Skapa providern  ----------------------------

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0); 

  const increment = () => setCount(count + 1); 
  const decrement = () => setCount(count - 1); 

  return (
    <myContext.Provider value={{ count, increment, decrement }}>
      {children}  
    </myContext.Provider>
  );
};

// 3. Skapa hook

export const useMyContext = () => {
  const context = useContext(myContext);

  // Om context är null betyder det att komponenten inte ligger inuti providern
  if (!context) {
    throw new Error('useMyContext måste användas inom en MyProvider');
  }

  return context; // Returnera värdena från context
};

/*
För att förstå providern ovan behöver man först förstå 'children' i React.
I React är children ett särskilt begrepp som refererar till de komponenter (eller element)
som läggs inuti en komponent. 

Exempel: 

<MyComponent>
  <p>Jag är children</p>
  <h1>Jag är också children</h1>
  <h3>Jag med!</h3>
</MyComponent>

I detta projekt finns en tydlig förklaring av children med hjälp av AppLayout.
AppLayout-komponenten är en egengjord layoutkomponent som definierar en standardstruktur 
för alla sidor som använder den.

Den renderar alltid de två gemensamma delarna (sidhuvudet och sidfoten) oavsett var den används.

({children}) som den tar emot däremot är dynamiskt och kan ändras beroende på varifrån man använder
AppLayout. Det är den delen som kommer att fyllas med specifikt innehåll för den sidan.Du behöver
inte definiera children explicit när du använder AppLayout i en annan komponent. children är en
inbyggd funktionalitet i React. Den tar automatiskt emot och renderar det innehåll som du placerar mellan öppnings- och 
stängningstaggarna för AppLayout.

*/