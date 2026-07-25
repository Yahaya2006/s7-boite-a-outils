# Boîte à outils JS — 10 fonctions utilitaires

Bibliothèque de fonctions réutilisables + mini-site de documentation.
Projet Semaine 7 (Avancé) — Akieni Academy.

## Fichiers

- `utils.js` — les 10 fonctions, indépendantes de toute page HTML
- `demo.js` — appelle chaque fonction avec 2 exemples réels et les affiche
- `index.html` — le site de documentation
- `style.css` — mise en page (Grid 2 colonnes, sommaire sticky, badges)

## Les 10 fonctions

### Nombres

| Fonction | Ce qu'elle fait | Exemple |
|---|---|---|
| `estPair(n)` | Vérifie si `n` est pair | `estPair(4)` → `true` |
| `maxDeDeux(a, b)` | Retourne le plus grand des deux nombres | `maxDeDeux(12, 27)` → `27` |
| `factorielle(n)` | Calcule n! de façon récursive | `factorielle(5)` → `120` |
| `estNombrePremier(n)` | Vérifie si `n` est un nombre premier | `estNombrePremier(17)` → `true` |

### Chaînes

| Fonction | Ce qu'elle fait | Exemple |
|---|---|---|
| `inverserChaine(texte)` | Inverse l'ordre des caractères | `inverserChaine('Brazza')` → `'azzarB'` |
| `compterVoyelles(texte)` | Compte les voyelles d'un texte | `compterVoyelles('Akieni')` → `4` |
| `estPalindrome(texte)` | Vérifie si le texte se lit pareil à l'envers | `estPalindrome('kayak')` → `true` |
| `capitaliser(texte)` | Majuscule au début de chaque mot | `capitaliser('bonjour monde')` → `'Bonjour Monde'` |

### Conversion

| Fonction | Ce qu'elle fait | Exemple |
|---|---|---|
| `convertirTemperature(c)` | Celsius → Fahrenheit | `convertirTemperature(0)` → `32` |
| `calculerTVA(prix, taux)` | Calcule le prix TTC | `calculerTVA(10000, 18)` → `11800` |

## Les 3 façons d'écrire une fonction (utilisées volontairement)

- **Déclaration** : `function estPair(n) { ... }`
- **Expression** : `const estNombrePremier = function(n) { ... }`
- **Fonction fléchée** : `const inverserChaine = (texte) => ...`

## Déployer sur GitHub Pages

```bash
git init
git add .
git commit -m "Premier commit : boîte à outils"
git branch -M main
git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/s7-boite-a-outils.git
git push -u origin main
```
Puis **Settings → Pages** → branche `main` → dossier `/ (root)`.