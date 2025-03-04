## Sammanfattning

Innehåll:
1. Skapa Context
2. Skapa Provider
3. Vad är children
4. Användning av children i providern
5. Skapa Hook
6. Använd Hook från komponent
7. Varför använder man ibland useEffect i en provider

### 1. Skapa Context:

![image](https://github.com/user-attachments/assets/f8052f29-5fcc-4260-89fa-5ed1a1229e0d)

createContext() används för att skapa en "behållare" för data som ska delas i applikationen. Detta gör
det möjligt att hantera data globalt utan att behöva passera props (prop drilling) mellan komponenter. 

### 2. Skapa Provider: 

![image](https://github.com/user-attachments/assets/0631afae-3bd3-412f-b642-702a986c55dc)

 Providern har två viktiga uppgifter:
 1. Att bestämma vilket värde som ska finnas i "lådan" (vilken data som ska delas i appen).
 2. Att bestämma vilka komponenter som ska få tillgång till det delade värdet i kontexten.

#### 2.1 Vad är children: 
I React är children ett begrepp som refererar till de komponenter som placeras inuti en annan komponent. I denna app
används AppLayout för att demonstrera en vanlig användning av children. Med hjälp av AppLayout finns en header som alltid renderas på samma sätt, 
likaså en footer. Däremot kommer innehållet i mitten alltid bestå av children och därmed vara dynamiskt: 

![image](https://github.com/user-attachments/assets/05b33cc3-95a3-45ae-9dbf-a5bd7c13e0eb)

#### 2.2 Användning av children i providern: 

![image](https://github.com/user-attachments/assets/069c61a4-89eb-4dbd-b6ea-7c96e8e1c81f)

### 3. Skapa hook:
![image](https://github.com/user-attachments/assets/d3d7f6cc-3f20-4194-a46f-85582c6e09d2)

### 4. Använd hook:
![image](https://github.com/user-attachments/assets/9df6c7e0-cf28-4e9a-916f-3b47ce851c10)

### Varför använder man ibland useEffect inuti en provider?
Ibland kan useEffect användas i en provider för att hantera olika operationer som kan uppstå när en komponent
renderas eller när värdena i kontexten förändras.

## Exempel 1: Hämta data från ett API precis när appen startar 
Om datan som läggs i kontexten kräver att man laddar data från en API precis när applikationen startar, 
kan du använda useEffect för att göra detta när provider-komponenten renderas första gången.
Ett bra exempel på detta är att hämta en lista med To-Do-uppgifter från en databas när användaren öppnar appen. 

![image](https://github.com/user-attachments/assets/196a716d-64e9-4ae8-b865-9a4dddd1212b)


## Exempel 2: Uppdatera datan som delas
Låt oss säga att du har en app där användarna kan uppdatera sina Todo-uppgifter. När användaren markerar en Todo som klar,
vill vi skicka uppdateringen till databasen och uppdatera den globala Todo-listan. Då kan man lägga in så
att useEffect körs varje gång något förändras i Todo-listan.

![image](https://github.com/user-attachments/assets/eff7575e-8b7f-4758-adfb-79cdd7cdc17e)

