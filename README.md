# TodoList Expo App

Aplikacja do zarządzania notatkami zbudowana z Expo (React Native) i Node.js backend.

## Struktura projektu

```
todoListExpo/
├── app/                    # Aplikacja Expo (Frontend)
│   ├── _layout.tsx        # Główny layout z Expo Router
│   └── index.tsx          # Strona główna
├── backend/               # Serwer Node.js (Backend)
│   ├── src/
│   │   ├── models/        # Modele MongoDB
│   │   ├── routes/        # API routes
│   │   ├── config.ts      # Konfiguracja
│   │   └── index.ts       # Główny plik serwera
│   └── package.json
└── assets/                # Zasoby aplikacji
```

## Technologie

### Frontend (Expo)

-   React Native z Expo
-   TypeScript
-   Expo Router (nawigacja)
-   React Native Safe Area Context

### Backend (Node.js)

-   Node.js z Express
-   TypeScript
-   MongoDB z Mongoose
-   CORS dla komunikacji z frontend

## Uruchomienie

### 1. Backend (Node.js + MongoDB)

```bash
cd backend

# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Lub w trybie produkcyjnym
npm run build
npm start
```

**Wymagania:**

-   MongoDB (lokalnie na `mongodb://localhost:27017/todolist`)
-   Node.js v16+

### 2. Frontend (Expo)

```bash
# W głównym folderze projektu
npm install

# Uruchomienie
npm run web      # Web
npm run android  # Android
npm run ios      # iOS
npm start        # Tryb deweloperski
```

## API Endpoints

Backend działa na `http://localhost:3001`

-   `GET /api/todos` - Pobierz wszystkie notatki
-   `POST /api/todos` - Utwórz nową notatkę
-   `PUT /api/todos/:id` - Zaktualizuj notatkę
-   `DELETE /api/todos/:id` - Usuń notatkę
-   `PATCH /api/todos/:id/toggle` - Przełącz status ukończenia

## Konfiguracja

### Backend (.env)

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/todolist
NODE_ENV=development
```

### Frontend

Aplikacja Expo jest skonfigurowana do komunikacji z backendem na `localhost:3001`.

## Rozwój

1. Uruchom MongoDB lokalnie
2. Uruchom backend: `cd backend && npm run dev`
3. Uruchom frontend: `npm start`
4. Otwórz aplikację w Expo Go lub emulatorze

## Funkcjonalności

-   ✅ Tworzenie notatek
-   ✅ Edycja notatek
-   ✅ Usuwanie notatek
-   ✅ Przełączanie statusu ukończenia
-   ✅ Priorytety (low, medium, high)
-   ✅ Opisy notatek
-   ✅ Timestampy (createdAt, updatedAt)

