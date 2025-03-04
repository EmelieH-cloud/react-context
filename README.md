## Sammanfattning

### Context: 
createContext() används för att skapa en "behållare" som kan lagra och dela data i en React-applikation. Detta är användbart för att hantera globalt tillstånd (state).
Contexten har en Provider-komponent som gör data tillgänglig för andra komponenter.

### Provider: 
 Providern har två viktiga uppgifter:
 1. Att bestämma vilket värde som ska finnas i "lådan" (det vill säga vilket data som ska delas).
 2. Att bestämma vilka komponenter som ska få tillgång till det delade värdet i kontexten.

### Children: 
I React är children ett begrepp som refererar till de komponenter som placeras inuti en annan komponent. I denna kod
används AppLayout för att demonstrera detta tydligt. Med hjälp av AppLayout finns en header som alltid renderas på samma sätt, 
likaså en footer. Däremot kommer innehållet i mitten alltid bestå av children och därmed vara dynamiskt. 

![image](https://github.com/user-attachments/assets/05b33cc3-95a3-45ae-9dbf-a5bd7c13e0eb)
