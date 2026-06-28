# Portfolio — Anis BOURMATTE

Portfolio personnel statique (HTML / CSS / JavaScript, sans framework).
Inspiré dans sa structure du dépôt de référence, mais avec une identité visuelle
propre : palette **bleu marine + vert pétrole**, typographies *Space Grotesk /
Inter / JetBrains Mono*, bandeau de métriques, et pages de détail par projet.

---

## 1. Ouvrir le site en local

Aucune installation, aucun build. Deux options :

- **Le plus simple** : double-cliquer sur `index.html` (il s'ouvre dans le navigateur).
- **Recommandé** (pour que tous les liens fonctionnent comme en ligne), lancer un
  petit serveur local depuis le dossier :

  ```bash
  # Python (déjà installé sur la plupart des machines)
  python3 -m http.server 8000
  # puis ouvrir http://localhost:8000
  ```

> Les polices (Space Grotesk, etc.) sont chargées depuis Google Fonts : il faut
> donc être connecté à Internet pour les voir. Sans connexion, le site reste
> lisible avec des polices de secours.

---

## 2. Structure des fichiers

```
portfolio/
├── index.html              ← page d'accueil (toutes les sections)
├── style.css               ← design system complet (couleurs, mise en page, responsive)
├── script.js               ← menu mobile, apparitions au scroll, nav active
│
├── alternance.html         ← page détail : l'alternance chez BNP Paribas
├── projet-tagging.html     ← page détail : moteur de tagging d'incidents
├── projet-rag.html         ← page détail : chatbot RAG
├── projet-entrepot.html    ← page détail : entrepôt de données qualité de l'air
├── projet-sla.html         ← page détail : analyse automatisée des SLA
│
├── img/
│   ├── favicon.svg         ← icône d'onglet (monogramme AB)
│   ├── cover-*.svg         ← illustrations d'en-tête de chaque projet
│   └── cv.png              ← miniature du CV
│
├── CV_Anis_BOURMATTE.pdf   ← CV téléchargeable (bouton « Télécharger mon CV »)
└── README.md               ← ce fichier
```

---

## 3. À personnaliser avant publication

Trois choses sont marquées comme **à compléter** — cherche ces points :

1. **Le lien LinkedIn.** Dans `index.html`, section Contact, remplace
   `https://www.linkedin.com/in/` par l'URL exacte de ton profil. (Le libellé
   affiche actuellement « À compléter ».)

2. **Le paragraphe « À propos »** (section `#apropos` de `index.html`). Le texte
   actuel est une proposition : relis-le et reformule-le avec tes propres mots,
   c'est ce qui rend un portfolio crédible.

3. **Les illustrations de projet** (`img/cover-*.svg`). Ce sont des schémas
   génériques. Si tu as de vraies captures d'écran (sans données confidentielles
   BNP), tu peux les remplacer par des `.png` et mettre à jour le `src` dans
   chaque page de détail.

> ⚠️ **Confidentialité.** Le site ne contient volontairement aucun nom de tuteur,
> aucune capture interne ni donnée client. Garde cette prudence si tu ajoutes du
> contenu : un portfolio est public.

---

## 4. Mettre le portfolio en ligne

### Option A — GitHub Pages (gratuit, le plus simple pour commencer)

1. Crée un dépôt GitHub (par ex. `portfolio`) et pousse ces fichiers :

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio Anis BOURMATTE"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```

2. Sur GitHub : **Settings → Pages → Source : `main` / `root`**, puis *Save*.
3. Le site sera disponible sous quelques minutes à
   `https://TON-PSEUDO.github.io/portfolio/`.

### Option B — Netlify (déploiement par glisser-déposer)

1. Va sur [app.netlify.com](https://app.netlify.com), crée un compte.
2. **Add new site → Deploy manually**, puis glisse le dossier `portfolio/`.
3. Le site est en ligne instantanément avec une URL `*.netlify.app` (et HTTPS
   automatique). Tu peux ensuite y brancher un nom de domaine perso.

### Nom de domaine personnalisé (optionnel)

Pour quelque chose comme `anisbourmatte.fr`, achète le domaine chez un
registrar (OVH, Gandi…), puis fais pointer les DNS vers GitHub Pages ou Netlify —
les deux fournissent le certificat HTTPS gratuitement.

---

## 5. Détails techniques

- **100 % statique** : aucune dépendance, aucun `npm install`, rien à compiler.
- **Responsive** : mise en page en grille qui se réorganise sur mobile, menu
  burger sous 860 px.
- **Accessibilité** : navigation au clavier (focus visible), respect de
  `prefers-reduced-motion`, structure HTML sémantique.
- **Dégradation propre** : si le JavaScript est désactivé, tout le contenu reste
  visible (les animations d'apparition ne se déclenchent simplement pas).

Bon courage pour la recherche d'alternance ingénieur ! 🚀
