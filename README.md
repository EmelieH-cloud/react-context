# React Context
## Innehållsförteckning
- [Skapa Context](#skapa-context)
- [Skapa Provider](#skapa-provider)
- [Förstå Children i React](#förstå-children-i-react)
- [Exempel på AppLayout](#exempel-på-applayout)

---

## Skapa Context

För att hantera globalt state i en React-applikation, kan vi skapa en **Context** med hjälp av `createContext()`.

```javascript
import { createContext } from "react";

// Skapa en kontext med ett initialt värde av `null`
const myContext = createContext(null);
```
Vad är en Context?

createContext() skapar en "behållare" där vi kan lagra och dela data i vår app. Detta är ett sätt att hantera så kallat globalt state.

Kontexten har en färdig property: Provider. Provider har två viktiga uppgifter:
- Att bestämma vilket värde som ska finnas i "lådan" (det vill säga vilket data som ska delas).
- Att bestämma vilka komponenter som ska få tillgång till det delade värdet i kontexten.
