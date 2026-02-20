# Test Case: login with valid credentials @Regression,@Smoke,@Sanity
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že uživatel se úspěšně přihlásí validními údaji a je přesměrován na inventory stránku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení validními údaji | Username: standard_user, Password: secret_sauce | Login proběhne úspěšně |
| 2. | Ověření úspěšného přihlášení | URL: https://www.saucedemo.com/inventory.html | První položka je viditelná a URL je správná |

# Test Case: login with empty credentials @Regression,@Smoke,@Sanity
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že při prázdných údajích se zobrazí chybová hláška.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení bez údajů | Username: —, Password: — | Login selže |
| 2. | Ověření chybové hlášky | — | Chybová hláška pro prázdné údaje je viditelná |

# Test Case: login with locked out user @Regression,@Smoke
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že zablokovaný uživatel nemůže dokončit přihlášení.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení zablokovaným uživatelem | Username: locked_out_user, Password: secret_sauce | Login selže |
| 2. | Ověření chybové hlášky | — | Chybová hláška pro zablokovaného uživatele je viditelná |

# Test Case: login with invalid email @Regression,@Smoke
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že neplatný username vyvolá chybovou hlášku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení s neplatným username | Username: invalid_user@gmai.com, Password: secret_sauce | Login selže |
| 2. | Ověření chybové hlášky | — | Chybová hláška pro neplatné údaje je viditelná |

# Test Case: login with invalid password @Regression,@Smoke
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že neplatné heslo vyvolá chybovou hlášku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení s neplatným heslem | Username: standard_user, Password: invalid_password | Login selže |
| 2. | Ověření chybové hlášky | — | Chybová hláška pro neplatné údaje je viditelná |

# Test Case: login with invalid email and password @Regression,@Smoke
**Zdrojový soubor:** tests/login.spec.ts
**Popis:** Ověření, že neplatný username i heslo vyvolají chybovou hlášku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Přihlášení s neplatným username a heslem | Username: invalid_user@gmai.com, Password: invalid_password | Login selže |
| 2. | Ověření chybové hlášky | — | Chybová hláška pro neplatné údaje je viditelná |
