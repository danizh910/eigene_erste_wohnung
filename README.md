# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Decap CMS Integration (/cms)

Dieses Projekt nutzt Decap CMS unter **`/cms`** (nicht `/admin`).

### Voraussetzungen in Netlify

1. **Netlify Identity aktivieren**
   - Netlify Site → `Identity` → `Enable Identity`.
2. **Registration auf Invite-only stellen**
   - `Identity` → `Settings and usage` → `Registration preferences` → `Invite only`.
3. **Git Gateway aktivieren**
   - `Identity` → `Services` → `Enable Git Gateway`.
4. Nutzer:innen einladen
   - `Identity` → `Invite users`.

### CMS URL

- CMS Oberfläche: **`/cms`**
- Bestehende Admin-Route bleibt unter **`/admin`** unverändert.

### Login Ablauf

1. Deployte Seite öffnen und `/cms` aufrufen.
2. Mit eingeladenem Identity-Account einloggen.
3. Collection **Content Notes** öffnen.
4. JSON-Dateien in `content/notes` erstellen oder bearbeiten.
5. Beim Speichern erzeugt Decap über Git Gateway einen Commit im Repository.
6. Nach dem Netlify Rebuild sind die Inhalte in der App sichtbar (z. B. unter `/content-preview`).

### Lokale Entwicklung (optional)

- `local_backend: true` ist aktiviert.
- Für lokale CMS-Tests kann ein lokales Git-Backend genutzt werden (z. B. via `npx decap-server`).
