# Alpine Mountains - Technische Test

**Project:** Sollicitatie – Technische test PHP/Angular  
**Auteur:** Rowan Biets 
**Duur:** +-8u.

## Overzicht

Dit project is een webapplicatie waarmee gebruikers bergen kunnen beheren: toevoegen, bekijken, bijwerken en verwijderen. Enkel **authenticated users** kunnen bergen beheren.  

De applicatie bestaat uit:  
- **Backend:** PHP Laravel REST API  
- **Database:** MySQL  
- **Frontend:** Angular 20 (standalone components)  
- **Styling:** Clean CSS  

---

## Features

- **Authenticatie:** Register, Login, Logout met JWT-token  
- **Bergen beheer:**  
  - Toevoegen, bijwerken, verwijderen van bergen  
  - Overzicht van alle bergen  
- **Beveiliging:** Enkel ingelogde gebruikers kunnen bergen beheren  
- **Navigatie:** Navbar met login, register en logout  

---

## Vereisten

- Node.js ≥ 20  
- npm ≥ 10  
- PHP ≥ 8  
- Composer  
- MySQL  
- Angular CLI (optioneel, voor extra commands)  

---

## Installatie

### Backend (Laravel API)

1. Navigeer naar de backend map:
```bash
cd alpine-mountains-backend
```
2. Installeer dependencies:
```bash
composer install
```
3. Kopieer `.env.example` naar `.env` en configureer database-instellingen:
```bash
cp .env.example .env
```
4. Genereer de app key:
```bash
php artisan key:generate
```
5. Migreer de database:
```bash
php artisan migrate
```
6. (Optioneel) Seeder toevoegen om testdata te vullen:
```bash
php artisan db:seed
```
7. Start de Laravel server:
```bash
php artisan serve
```
API draait standaard op: `http://localhost:8000/api`

---

### Frontend (Angular)

1. Navigeer naar de frontend map:
```bash
cd alpine-mountains-frontend
```
2. Installeer dependencies:
```bash
npm install
```
3. Start de Angular dev server:
```bash
ng serve
```
Frontend draait standaard op: `http://localhost:4200/`

---

## Gebruik

1. Ga naar `http://localhost:4200/`  
2. Registreer een nieuw account of log in met een bestaand account  
3. Zodra je ingelogd bent, kun je bergen toevoegen, bewerken en verwijderen in het **Mountain Dashboard**  
4. Gebruik de navigatiebalk om uit te loggen  

---

## Frontend structuur

- `src/app/components/login/` → Login component  
- `src/app/components/register/` → Register component  
- `src/app/components/mountains/` → Mountain Dashboard component  
- `src/app/services/api.ts` → Angular service voor alle API calls  

---

## Backend endpoints

- `POST /api/register` → Registreren  
- `POST /api/login` → Inloggen  
- `POST /api/logout` → Uitloggen  
- `GET /api/mountains` → Alle bergen ophalen  
- `POST /api/mountains` → Nieuwe berg toevoegen  
- `PUT /api/mountains/{id}` → Berg updaten  
- `DELETE /api/mountains/{id}` → Berg verwijderen  

---

## Tips / Extra informatie

- Enkel **ingelogde gebruikers** hebben toegang tot bergen.  
- Token wordt lokaal opgeslagen via `localStorage`.  
- Frontend gebruikt **standalone Angular components**.  
- CSS is clean en responsief, zonder Tailwind.  

---

## Visueel schema navigatie en bergen dashboard

```
[Login/Register] --(success)--> [Mountain Dashboard]
                        |
                        |--(Logout)--> [Login/Register]

Mountain Dashboard:
- Lijst van bergen
- Buttons naast elke berg: Edit | Delete
- Form bovenaan: Add / Update berg
```

---






