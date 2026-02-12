# RFI Tunnel Inspector - Sistema di Verifica Nicchie di Sicurezza

Progressive Web App professionale per la verifica delle nicchie di sicurezza nelle gallerie ferroviarie.

## Caratteristiche Principali

- **740+ Nicchie Pre-caricate** (km 37+259 → 55+742)
- **Selezione Direzione**: Scelta tra San Benedetto Val di Sambro (55+742) o Vernio (37+200)
- **Verifiche Complete**:
  - Segnaletica Uscite di Emergenza (tutte le nicchie)
  - Illuminazione di Emergenza (12,5m tra corpi illuminanti) + conta luci non funzionanti
  - Camminamento (verifica percorsi pedonali)
  - Corrimano (verifica corrimano di sicurezza)
  - Telefonia TEM (solo nicchie con impianto TEM)
  - Idranti (solo nicchie con idranti)
  - Quadri VVF (solo nicchie specifiche con manichette antincendio)
- **Foto Condizionali**: Richieste solo per elementi non conformi
- **Funzionamento Offline Completo**
- **Report Dettagliato via Email**

## Dati e Configurazione

L'app carica dinamicamente i dati delle nicchie da file strutturati nella directory `/data`:

- **NicchieTotali.txt**: Tutte le 740+ nicchie (colonne P e D per binari Pari e Dispari)
- **NicchieQuadriVVF.txt**: Nicchie dotate di quadri VVF (solo colonna D)
- **NicchieTEM.txt**: Nicchie con telefonia TEM (colonne D e P)
- **NicchieIdranti.txt**: Nicchie con idranti (colonne D e P)

I file vengono caricati all'avvio dell'app. Se il caricamento fallisce, viene utilizzato un dataset minimo embedded come fallback.

## Specifiche Tecniche

### Segnaletica
Segnaletica che indica le **uscite di emergenza** in galleria

### Illuminazione
Illuminazione di emergenza posta **sopra il corrimano** con distanza di **12,5 metri** tra un corpo illuminante e l'altro

## Guida all'Utilizzo

### 1. Avvio Verifica

All'apertura dell'app ti viene chiesto:

**a) Da quale nicchia vuoi iniziare?**
- Menu a tendina con tutte le 740 nicchie
- Esempio: "52+634 - Binario D"

**b) In quale direzione stai andando?**
- ↑ Verso San Benedetto Val di Sambro (55+742)
- ↓ Verso Vernio (37+200)

L'app mostrerà **solo le nicchie nella direzione selezionata** dalla nicchia di partenza.

### 2. Verifica Ogni Nicchia

Per ogni nicchia hai **più sezioni di verifica**:

#### Segnaletica Uscite di Emergenza
- ✓ **Conforme** → Tutto OK
- ⚠ **Non Conforme** → Appare pulsante foto

#### Illuminazione di Emergenza
- ✓ **Conforme** → Tutto OK  
- ⚠ **Non Conforme** → Appare:
  - Campo numerico per contare i corpi illuminanti non funzionanti
  - Pulsante "Allega Foto"

#### Camminamento
- ✓ **Conforme** → Tutto OK
- ⚠ **Non Conforme** → Appare pulsante foto

#### Corrimano
- ✓ **Conforme** → Tutto OK
- ⚠ **Non Conforme** → Appare pulsante foto

#### Telefonia TEM (solo se presente)
- ✓ **Conforme** → Tutto OK
- ⚠ **Non Conforme** → Appare pulsante foto

#### 🚰 Idranti (solo se presenti)
- ✅ **Conforme** → Tutto OK
- ⚠️ **Non Conforme** → Appare pulsante foto

#### 🔥 Quadri VVF (solo nicchie specifiche)
- ✅ **Presente e segnaletica OK** → Tutto OK
- ⚠️ **Assente / non conforme** → Appare pulsante foto

### 3. Workflow Completo

```
INIZIO
↓
1. Seleziona nicchia partenza: "52+634 - Binario D"
2. Seleziona direzione: "Verso San Benedetto"
3. Premi "Inizia Verifica"
↓
PER OGNI NICCHIA:
↓
4. Segnaletica:
   - OK? → Seleziona "Funzionante"
   - Problema? → Seleziona "Necessita Manutenzione" → Scatta foto
↓
5. Illuminazione:
   - OK? → Seleziona "Funzionante"
   - Problema? → Seleziona "Necessita Manutenzione" → Scatta foto
↓
6. Nicchia completata automaticamente ✓
↓
PROSSIMA NICCHIA...
↓
FINE
7. Inserisci email
8. Invia Report
```

## 📊 Esempio Report

```
REPORT VERIFICA NICCHIE DI SICUREZZA GALLERIA
Data Ispezione: 11/02/2025 15:30
Direzione: Verso San Benedetto Val di Sambro (55+742)
Nicchie Verificate: 180/180
Nicchie Necessitano Manutenzione: 12
Percentuale Completamento: 100%

============================================================

RIEPILOGO NICCHIE CHE NECESSITANO MANUTENZIONE

📍 52+634 - Binario D
   ⚠️ SEGNALETICA USCITE EMERGENZA - Necessita Manutenzione (2 foto)
   Verificato: 11/02/2025 14:30

📍 48+424 - Binario P
   ⚠️ ILLUMINAZIONE EMERGENZA - Necessita Manutenzione (1 foto)
   Verificato: 11/02/2025 15:15

============================================================

DETTAGLIO COMPLETO NICCHIE

1. Km 52+634 - Binario D
   Stato: ✅ VERIFICATA
   Segnaletica Uscite Emergenza: ⚠️ Necessita Manutenzione
   Illuminazione Emergenza (12,5m): ✅ Funzionante
   Data Verifica: 11/02/2025 14:30
   Foto Allegate: 2
     - Segnaletica: 2

2. Km 52+621 - Binario D
   Stato: ✅ VERIFICATA
   Segnaletica Uscite Emergenza: ✅ Funzionante
   Illuminazione Emergenza (12,5m): ✅ Funzionante
   Data Verifica: 11/02/2025 14:35

...

Note Tecniche:
- Segnaletica: Indica le uscite di emergenza in galleria
- Illuminazione: Corpi illuminanti sopra corrimano a distanza 12,5m
```

## ✨ Caratteristiche Avanzate

### Filtro Automatico
L'app mostra solo le nicchie rilevanti:
- Se parti da km 50+000 verso San Benedetto: mostra da 50+000 a 55+742
- Se parti da km 50+000 verso Vernio: mostra da 50+000 a 37+259

### Foto Intelligenti
- **NO foto** se tutto funzionante
- **Foto richiesta** solo se necessita manutenzione
- Foto categorizzate automaticamente (segnaletica/illuminazione)

### Salvataggio Automatico
- Ogni selezione salvata istantaneamente
- Continua da dove hai lasciato
- Nessuna perdita dati

### Nessun GPS
- Non richiede geolocalizzazione
- Più veloce
- Funziona anche senza permessi GPS

## 🛠️ Setup

### Test Locale
```bash
python3 -m http.server 8000
# Apri http://localhost:8000
```

### Deploy Produzione
1. Carica su server HTTPS
2. Installa come PWA dal browser

## 📱 Installazione Mobile

1. Apri nel browser (Chrome/Safari)
2. Menu → "Aggiungi a schermata Home"
3. App installata ✓

## 🔒 Permessi
- **Fotocamera**: Solo per documentare manutenzioni
- **Storage**: Per salvare dati offline
- **NO GPS richiesto**

## 💡 Vantaggi

### Rispetto alla Versione Precedente
- ✅ Selezione direzione (evita nicchie inutili)
- ✅ Foto solo quando serve (più veloce)
- ✅ Nessun GPS (più semplice)
- ✅ Descrizioni dettagliate (chiare)
- ✅ Due risposte (Funzionante/Manutenzione)

### Efficienza
- Verifichi solo le nicchie rilevanti
- Non perdi tempo con GPS
- Foto solo se necessario
- Report focalizzato su problemi

## 🎯 Casi d'Uso

**Scenario 1: Ispezione Completa**
- Parti da inizio galleria (37+259)
- Direzione: San Benedetto
- Verifichi tutte le 740 nicchie

**Scenario 2: Tratta Specifica**
- Parti da km 48+000
- Direzione: Vernio
- Verifichi solo da 48+000 a 37+259

**Scenario 3: Controllo Rapido**
- Parti da km 52+000
- Direzione: San Benedetto
- Solo nicchie problematiche fotografate

## 🐛 Troubleshooting

**Foto non si scattano?**
- Verifica permessi fotocamera
- Assicurati di aver selezionato "Necessita Manutenzione"

**App non si installa?**
- Serve HTTPS (non http)
- Usa Chrome/Safari/Edge

**Dati persi?**
- Non usare modalità incognito
- Non cancellare cache browser

---

**NicheSafe** - Verifica efficiente e sicura 🚇
