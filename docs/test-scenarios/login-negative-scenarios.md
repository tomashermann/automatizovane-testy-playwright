# Test Case: should show error for locked_out_user
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření, že zablokovaný uživatel nemůže dokončit přihlášení a je zobrazená správná chybová hláška.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Pokus o přihlášení se zablokovaným uživatelem | Username: locked_out_user, Password: secret_sauce | Login selže |
| 3. | Ověření chybové hlášky pro zablokovaného uživatele | — | Error container je viditelný a obsahuje text o zablokování |

# Test Case: should show error for invalid password
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření, že neplatné heslo u validního username vyvolá chybovou hlášku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Pokus o přihlášení s neplatným heslem | Username: standard_user, Password: invalid_password | Login selže |
| 3. | Ověření chybové hlášky pro neplatné údaje | — | Error container je viditelný a obsahuje text o neplatných údajích |

# Test Case: should show error for invalid credentials
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření, že neplatná kombinace username a hesla vyvolá chybovou hlášku.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Pokus o přihlášení s neplatným username i heslem | Username: invalid_user@gmai.com, Password: invalid_password | Login selže |
| 3. | Ověření chybové hlášky pro neplatné údaje | — | Error container je viditelný a obsahuje text o neplatných údajích |

# Test Case: should show error when credentials are empty
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření validace pro prázdná přihlašovací pole.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Pokus o přihlášení bez zadání údajů | Username: —, Password: — | Login selže |
| 3. | Ověření chybové hlášky „Username is required“ | — | Error container je viditelný a hláška o chybějícím username je viditelná |

# Test Case: should show error when password is missing
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření validace pro chybějící heslo.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Zadání pouze username a odeslání | Username: standard_user, Password: — | Login selže |
| 3. | Ověření chybové hlášky „Password is required“ | — | Error container je viditelný a hláška o chybějícím hesle je viditelná |

# Test Case: should show error when username is missing
**Zdrojový soubor:** tests/login_negative.spec.ts
**Popis:** Ověření validace pro chybějící username.

| Krok | Akce | Testovací data | Očekávaný výsledek |
| :--- | :--- | :--- | :--- |
| 1. | Ověření, že jsme na login stránce | URL: /.*saucedemo/ | URL odpovídá vzoru /.*saucedemo/ |
| 2. | Zadání pouze hesla a odeslání | Username: —, Password: secret_sauce | Login selže |
| 3. | Ověření chybové hlášky „Username is required“ | — | Error container je viditelný a hláška o chybějícím username je viditelná |
