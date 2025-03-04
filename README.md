## Sammanfattning

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
