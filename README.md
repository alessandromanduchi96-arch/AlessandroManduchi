# NicheSafe - Verifica Apprestamenti Tecnologici Galleria Ferroviaria

Progressive Web App specializzata per la verifica degli apprestamenti tecnologici nelle gallerie ferroviarie.

## 🚇 Caratteristiche

- 📋 **38 Apprestamenti Tecnologici** (km 37+259 → 55+742)
- 🎯 **Selezione Direzione**: Scegli se vai verso San Benedetto o Vernio
- 🔍 **Verifiche Apprestamenti**:
  - **Idranti VVF** (13 postazioni)
  - **Colonnine TEM** (13 postazioni)
  - **Quadri di soccorso VVF** (12 postazioni)
- 🚨 **Segnalazione Malfunzionamenti**: Camminamento, Corrimano, Segnaletica, Illuminazione
- 📷 **Foto per Malfunzionamenti**: Con progressiva chilometrica
- 💾 **Funzionamento Offline Completo**
- 📧 **Report Dettagliato via Email**

## 🎯 Apprestamenti Tecnologici

### Idranti VVF
Idranti per Vigili del Fuoco posizionati in punti strategici della galleria

### Colonnine TEM
Colonnine di emergenza per comunicazioni tecniche

### Quadri di soccorso VVF
Quadri elettrici di emergenza per operazioni dei Vigili del Fuoco

## 🚀 Come Usare

### 1. Avvio Verifica

All'apertura dell'app ti viene chiesto:

**a) Da quale apprestamento vuoi iniziare?**
- Menu a tendina con tutti i 38 apprestamenti tecnologici
- Esempio: "55+575 - Binario D"

**b) In quale direzione stai andando?**
- ⬆️ Verso San Benedetto Val di Sambro (55+742)
- ⬇️ Verso Vernio (37+200)

L'app mostrerà **solo gli apprestamenti nella direzione selezionata** dal punto di partenza.

### 2. Verifica Ogni Apprestamento

Per ogni apprestamento tecnologico (Idranti VVF, Colonnine TEM, Quadri di soccorso VVF) hai **tre verifiche obbligatorie**:

#### 🔧 Stato dell'apprestamento
- ✅ **Conforme** → Tutto OK
- ⚠️ **Non Conforme** → Segnala problema

#### 🔒 Verifica manomissione sigillo
- ✅ **Integro** → Sigillo intatto
- ⚠️ **Manomesso** → Sigillo manomesso o danneggiato

#### 🚨 Presenza segnaletica di riferimento
- ✅ **Presente** → Segnaletica visibile
- ⚠️ **Assente** → Segnaletica mancante

### 3. Segnalazione Malfunzionamenti

Durante l'ispezione puoi segnalare malfunzionamenti infrastrutturali tramite il pulsante **"🚨 Segnala Malfunzionamento"**.

#### Tipi di Malfunzionamento:

**🚶 Camminamento**
- Foto obbligatoria
- Progressiva chilometrica (es. 45+234)

**🤝 Corrimano**
- Foto obbligatoria
- Progressiva chilometrica

**🚪 Segnaletica di Uscita**
- Foto obbligatoria
- Progressiva chilometrica

**💡 Impianto di Illuminazione**
- Progressiva chilometrica
- Tipo di guasto:
  - **🔵 Fungo Blu** (solo km)
  - **💡 Corpi Illuminanti** (km + numero corpi non funzionanti)

### 4. Workflow Completo

```
INIZIO
↓
1. Seleziona apprestamento partenza: "55+575 - Binario D"
2. Seleziona direzione: "Verso San Benedetto"
3. Premi "Inizia Verifica"
↓
PER OGNI APPRESTAMENTO:
↓
4. Verifica Stato dell'apprestamento:
   - OK? → Seleziona "Conforme"
   - Problema? → Seleziona "Non Conforme"
↓
5. Verifica Sigillo:
   - OK? → Seleziona "Integro"
   - Problema? → Seleziona "Manomesso"
↓
6. Verifica Segnaletica:
   - OK? → Seleziona "Presente"
   - Problema? → Seleziona "Assente"
↓
7. Apprestamento completato automaticamente ✓
↓
8. (Opzionale) Segnala malfunzionamenti:
   - Camminamento/Corrimano/Segnaletica → Foto + KM
   - Illuminazione → Tipo guasto + KM (+ numero corpi se necessario)
↓
PROSSIMO APPRESTAMENTO...
↓
FINE
9. Invia Report via Email
```

## 📊 Esempio Report

```
REPORT VERIFICA APPRESTAMENTI TECNOLOGICI GALLERIA
Data Ispezione: 13/02/2026 15:30
Direzione: Verso San Benedetto Val di Sambro (55+742)
Apprestamenti Verificati: 13/13
Apprestamenti Non Conformi: 2
Segnalazioni Malfunzionamenti: 3
Percentuale Completamento: 100%

============================================================

RIEPILOGO APPRESTAMENTI NON CONFORMI

📍 54+774 - Binario D - Idranti VVF
   ⚠️ STATO APPRESTAMENTO - Non Conforme
   ⚠️ SIGILLO - Manomesso
   Verificato: 13/02/2026 14:30

📍 46+597 - Binario P - Quadri di soccorso VVF
   ⚠️ SEGNALETICA DI RIFERIMENTO - Assente
   Verificato: 13/02/2026 15:15

============================================================

SEGNALAZIONI MALFUNZIONAMENTI

1. 🚶 CAMMINAMENTO
   Progressiva: 48+150
   Foto Allegata: Sì
   Segnalato: 13/02/2026 14:45

2. 💡 IMPIANTO DI ILLUMINAZIONE
   Progressiva: 50+234
   Tipo Guasto: Corpi Illuminanti
   Numero Corpi Non Funzionanti: 5
   Segnalato: 13/02/2026 15:00

3. 🤝 CORRIMANO
   Progressiva: 52+100
   Foto Allegata: Sì
   Note: Corrimano danneggiato, necessita sostituzione
   Segnalato: 13/02/2026 15:20

============================================================

DETTAGLIO COMPLETO APPRESTAMENTI TECNOLOGICI

1. Km 55+575 - Binario D
   Tipo: Idranti VVF
   Stato: ✅ VERIFICATO
   Stato Apprestamento: ✅ Conforme
   Sigillo: ✅ Integro
   Segnaletica di Riferimento: ✅ Presente
   Data Verifica: 13/02/2026 14:00

2. Km 54+774 - Binario D
   Tipo: Idranti VVF
   Stato: ✅ VERIFICATO
   Stato Apprestamento: ⚠️ Non Conforme
   Sigillo: ⚠️ Manomesso
   Segnaletica di Riferimento: ✅ Presente
   Data Verifica: 13/02/2026 14:30

...

Note Tecniche:
- Apprestamenti Tecnologici: Idranti VVF, Colonnine TEM, Quadri di soccorso VVF
- Per ogni apprestamento: verificato stato, sigillo e segnaletica
- Segnalati 3 malfunzionamenti infrastrutturali
```

## ✨ Caratteristiche Avanzate

### Filtro Automatico
L'app mostra solo gli apprestamenti rilevanti:
- Se parti da km 50+000 verso San Benedetto: mostra da 50+000 a 55+742
- Se parti da km 50+000 verso Vernio: mostra da 50+000 a 37+259

### Gestione Malfunzionamenti
- **Segnalazioni separate** dalle verifiche apprestamenti
- **Foto obbligatorie** per Camminamento, Corrimano, Segnaletica uscita
- **Progressiva chilometrica** per tutti i malfunzionamenti
- **Dettagli specifici** per illuminazione (tipo guasto + numero corpi)

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
