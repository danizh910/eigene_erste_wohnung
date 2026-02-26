# Anleitung: Projekt zu GitHub hochladen

Folge diesen Schritten im Terminal von Firebase Studio:

1. **GitHub Repository erstellen:**
   Erstelle ein neues, leeres Repository auf [github.com](https://github.com/new). Kopiere die HTTPS-URL (z.B. `https://github.com/dein-name/dein-projekt.git`).

2. **Git initialisieren:**
   Gib folgende Befehle nacheinander im Terminal ein:
   ```bash
   git init
   git add .
   git commit -m "Initialer Commit vom UBS Sprint Hub"
   ```

3. **Remote hinzufügen:**
   Ersetze die URL durch deine eigene Repository-URL:
   ```bash
   git remote add origin https://github.com/DEIN_BENUTZERNAME/DEIN_PROJEKTNAME.git
   git branch -M main
   ```

4. **Hochladen (Push):**
   ```bash
   git push -u origin main
   ```

*Hinweis: Du wirst nach deinem GitHub-Benutzernamen und einem "Personal Access Token" (als Passwort) gefragt, falls du keine SSH-Keys hinterlegt hast.*
