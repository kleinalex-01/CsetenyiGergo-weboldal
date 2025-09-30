# 🚀 MHOSTING DEPLOY ÚTMUTATÓ - cPanel

## 📋 TEENDŐK LISTÁJA:

### ✅ 1. FÁJLOK ELŐKÉSZÍTÉSE (KÉSZ)
- [x] npm run build lefuttatva
- [x] /dist mappa létrehozva
- [x] .htaccess fájl hozzáadva

### 🌐 2. cPANEL BEJELENTKEZÉS
1. Menj a: https://cpanel.mhosting.hu (vagy az emailben kapott link)
2. Add meg a bejelentkezési adataidat
3. Keresd meg a "File Manager" opciót

### 📁 3. FÁJLOK FELTÖLTÉSE
1. **File Manager megnyitása**
   - Kattints a "File Manager" ikonra
   - Válaszd ki a "public_html" mappát (ez a weboldal gyökere)

2. **Régi fájlok törlése (ha vannak)**
   - Töröld ki a public_html mappa tartalmát
   - FIGYELEM: NE töröld a .htaccess fájlokat és .well-known mappát!

3. **Új fájlok feltöltése**
   - Kattints az "Upload" gombra
   - Válaszd ki a /dist mappa ÖSSZES tartalmát:
     ```
     ✅ index.html
     ✅ assets/ mappa (teljes tartalom)
     ✅ .htaccess
     ✅ manifest.webmanifest
     ✅ sw.js és kapcsolódó fájlok
     ✅ registerSW.js
     ✅ workbox-*.js fájlok
     ```

4. **Fájlok kicsomagolása**
   - Ha ZIP-be csomagoltad, csomagold ki a public_html-be
   - Ellenőrizd, hogy az index.html közvetlenül a public_html-ben van

### 🔒 4. SSL TANÚSÍTVÁNY BEÁLLÍTÁSA
1. **SSL/TLS szekció keresése**
   - cPanel főoldalon keresd: "SSL/TLS" vagy "Let's Encrypt"

2. **Let's Encrypt aktiválása**
   - Domain: csetenyigergo.hu és www.csetenyigergo.hu
   - Email: add meg az email címedet
   - Kattints: "Install SSL Certificate"

3. **HTTPS redirect**
   - Kapcsold be a "Force HTTPS Redirect" opciót

### 🌍 5. DNS ELLENŐRZÉS
1. **Nameserver check**
   - Ellenőrizd, hogy a domain nameserverei mHosting-ra mutatnak
   - Ez általában automatikus, de 24-48 órát vehet igénybe

2. **Domain teszt**
   - Próbáld meg: http://csetenyigergo.hu
   - És: https://csetenyigergo.hu
   - Mindkettőnek működnie kell

### 🧪 6. FUNKCIONALITÁS TESZTELÉSE
1. **Oldal navigáció**
   - [x] Főoldal betöltődik
   - [x] Szolgáltatások oldal
   - [x] Galéria oldal  
   - [x] Kapcsolat oldal

2. **Routing teszt**
   - Frissítsd az oldalt a /szolgaltatasok URL-en
   - Ha 404 hibát kapsz, a .htaccess nem működik

3. **Mobilbarát teszt**
   - Telefonról nézd meg az oldalt
   - Ellenőrizd a reszponzív designt

### 🛠️ 7. HIBAKERESÉS

#### ❌ Ha az oldal nem töltődik be:
```bash
Probléma: 404 Not Found
Megoldás: Ellenőrizd, hogy az index.html a public_html gyökerében van
```

#### ❌ Ha a routing nem működik:
```bash
Probléma: /szolgaltatasok 404 hibát ad
Megoldás: A .htaccess fájl nincs feltöltve vagy nem működik
```

#### ❌ Ha a CSS nem töltődik be:
```bash
Probléma: Oldal betöltődik, de nincs stílus
Megoldás: Az assets/ mappa hiányzik vagy rossz helyen van
```

### 📞 8. MHOSTING ÜGYFÉLSZOLGÁLAT
Ha elakadnál:
- Email: info@mhosting.hu
- Telefon: +36 1 700 4638
- Nyitvatartás: H-P 9-17

### 🎉 9. SIKERES DEPLOY ELLENŐRZÉS
- [x] https://csetenyigergo.hu betöltődik
- [x] SSL tanúsítvány működik (zöld lakat)
- [x] Minden oldal elérhető
- [x] Mobilon is jól néz ki
- [x] Térkép működik
- [x] Kapcsolatfelvételi linkek működnek

## 💡 TIPPEK:
1. **Backup**: Mentsd le a jelenlegi fájlokat deploy előtt
2. **Cache**: Töröld a böngésző cache-t tesztelés előtt
3. **DNS**: 24-48 órát várj a teljes DNS propagációra
4. **Email**: Állíts be email fiókokat ha szükséges