# Prosta aplikacja TODO

## Opis:

Rozwiązanie prezentuje podstawową implementacją aplikacji TODO w formie prostego formularza przedstawiającego listę zadań TODO w której możemy wykonywać podstawowe czynności.

Strona współpracuje z [REST API](https://github.com/lukaszkazmierski/api-todo-app)  udostępnionym na moim githubie. Serwer oparty jest na express.js i mongoDB Atlas, gdzie wszystkie akcje są wykonywane. W związku z mniejszą złożonością zadania i brakiem opcji autoryzacji, TODO są przechowywane w jednej bazie danych i są jednakowe dla wszystkich użytkowników. 

Strona prezentuje się następująco:
![](https://i.imgur.com/A0n6Frf.png)

## Funkcjonalność:
- Dodawanie zadań
- Usuwanie zadań
- Zaznaczanie wykonania zadania (checkbox)
- Po każdym zaznaczeniu/odznaczeniu wyświetl w konsoli wszystkie
zaznaczone elementy
- Sortowanie według ukończonych

## Stack
- TypeScript
- Next.js
- Material-UI

