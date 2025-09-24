# TodoList Backend

Czysty backend do aplikacji TodoList - gotowy do samodzielnej implementacji.

## Struktura

```
backend/
├── index.js          # Główny plik serwera
├── package.json      # Zależności
└── README.md         # Ten plik
```

## Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Uruchomienie w trybie produkcyjnym
npm start
```

## Co masz do zrobienia

1. **Dodaj CORS** - żeby frontend mógł się łączyć z backendem
2. **Dodaj bazę danych** - MongoDB, PostgreSQL, SQLite lub inna
3. **Stwórz model Todo** - struktura notatki
4. **Dodaj API endpoints**:
    - GET /api/todos - pobierz wszystkie notatki
    - POST /api/todos - utwórz nową notatkę
    - PUT /api/todos/:id - zaktualizuj notatkę
    - DELETE /api/todos/:id - usuń notatkę
5. **Dodaj walidację** - sprawdzanie danych wejściowych
6. **Dodaj obsługę błędów** - proper error handling

## Podpowiedzi

-   Użyj `cors` middleware dla CORS
-   Użyj `mongoose` dla MongoDB lub `sequelize` dla SQL
-   Dodaj `dotenv` dla zmiennych środowiskowych
-   Struktura notatki może zawierać: title, description, completed, priority, createdAt

## Testowanie

```bash
# Sprawdź czy serwer działa
curl http://localhost:3001/api/health
```

Powodzenia! 🚀

