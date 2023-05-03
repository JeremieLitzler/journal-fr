---
title: 'Construire son site moderne et rapide !'
description: "De nos jours, il existe beaucoup de méthodes pour créer son site web. J'en présente une qui coûte presque rien. Pour de vrai !"
heroImage: /images/2023-04-19-jamstack-javascript-apis-markup.webp
heroAlt: Diagramme expliquant l'organisation de la JAMSTACK
date: 2023-04-19
head:
  - [
      link,
      {
        rel: canonical,
        href: https://jeremielitzler.fr/2023/??/creer-son-site-moderne-rapide/,
      },
    ]
category:
  - Tutoriels
tag:
  - Web
article: false
---

![Diagramme expliquant l'organisation de la JAMSTACK](/images/2023-04-19-jamstack-javascript-apis-markup.webp 'Image issue de l\'article ["New to Jamstack? Everything You Need to Know to Get Started"](https://snipcart.com/blog/jamstack) de Snipcart.')

De nos jours, il existe beaucoup de méthodes pour créer son site web. J'en présente une qui coûte presque rien. Pour de vrai !

<!-- more -->

<!-- [< Retour à la table des matières](../comment-realiser-son-site-moderne-et-rapide/README.md) | [Préparer son PC](../preparer-un-env-pour-un-site-moderne-rapide/README.md) | [Déployer son site web sur Netlify >](../deployer-son-site-moderne-rapide/README.md) -->

## Pré-requis

- Avoir réaliser l'étape de préparation de son PC.

## Cloner les dépôts

:::tip Optionnellement, créer un dossier `Git`
Dans le disque C ou D de votre ordinateur ou ailleurs, cela permettra d'organiser vos dépôts locaux.
:::

- Lancer la commande `git clone https://github.com/VotrePseudoGitHub/NomDeVotreDepot` qui crée un dossier `NomDeVotreDepot`.
  - Dans mon cas, j'utiliserai le dépôt `JeremieLitzler/mon-site-demo-tutoriel` (disponible [ici](https://github.com/JeremieLitzler/mon-site-demo-tutoriel)).
- Lancer la commande `git clone https://github.com/Puzzlout/TemplateVuepress/` pour clôner le dépôt contenant la structure du site à réaliser.
  - Le dépôt est sauvegardé dans le dossier `TemplateVuepress` à l'endroit où vous stockez vous dépôt.
  - Pour moi, ce sera `D:/Git/GitHub/

## Initialiser le site web à partir du modèle

Maintenant que les dépôts sont clonés :

### Copier le tout le contenu du modèle.

On copiera les fichiers du dossier `TemplateVuepress` dans le dossier `NomDeVotreDepot`, incluant le dossier `.vscode` pour les snippets de code.

:::warning Sauf le dossier <em>.git</em> et <em>github</em>
:::

![Fichiers à copier du dépôt modèle vers votre dépôt](./images/fichiers-a-copier-du-depot-modele-vers-votre-depot.jpg)

### Personnaliser les fichiers issus du modèle

Au minimum les fichiers suivants doivent être personnalisé, incluant :

- les fichiers définissant l'élément `head` global dans le dossier `docs/.vuepress/configs/head`.

  - vous trouverez un fichier `js` par locale ou langue que le site propose.

- les fichiers définissant l'élément `nav` pour le menu de navigation dans le dossier `docs/.vuepress/configs/navbar` - vous trouverez un fichier `js` par locale ou langue que le site propose.

- le fichier `docs/.vuepress/public/admin/config.yml` définissant l'interface avec NetlifyCMS, si vous l'activer (voir plus loin comme l'activer).

  - il faudra alors mettre à jour le nom du dépôt.

- les fichiers `docs/.vuepress/public/site.webmanifest` et les variantes par locale, qui définissent l'application web

  - vous trouvez ce fichier déclaré dans le fichier `js` correspondant à la locale dans le dossier `docs/.vuepress/configs/head`.

- le fichier `docs/.vuepress/config.js` qui définit :

  - la locale par défaut, à ajuster selon votre besoin.
  - les locales actives, à ajuster selon votre besoin.

### Personnaliser le thème

A travers le fichier `docs/.vuepress/theme.ts`, qui définit certains valeurs à ajuster selon votre cas, personnalisez :

- le `hostname` correspondant à l'URL de base de votre site.

  - Vous pouvez réaliser un `CTRL + SHIFT + H` et exécuter un remplacement de `example.com` en `votresite.fr` par exemple.

- le `author > name` correspondant à votre nom

- le `repo` correspondant à l'identification du dépôt sur GitHub.

  - Vous pouvez réaliser un `CTRL + SHIFT + H` et exécuter un remplacement de `GitHubUsername/GitRepoName` en `VotrePseudoGitHub/VotreNomDeDepotGit` par exemple.

- les `docsBranch`, `docsDir`, `editLinkPattern` n'ont pas besoin d'être modifiés.

- les valeurs `logo` et `logoDark` n'ont pas besoin d'être modifié si vous suivez les instructions de création de votre logo.

  - `logoDark` peut être supprimé si `darkmode` n'est pas nécessaire.

- la liste des `locales`, qui doit correspondrre à la liste déclarée dans `docs/.vuepress/config.js`.

  - toutefois, ici, on déclare les configurations du menu de navigation par locale.

- le `displayFooter` permet d'afficher le pied de page global sur le site, en configurant la propriété `footer` qui suit.

  - le `footer` peut contenir du code HTML, mais le markdown n'est pas interprêté.

- les listes des `plugins` est configuré de façon optiomal pour un usage basique, mais reste toutefois riche. Si vous souhaitez davantage, visitez [le site du thème VuePress](https://theme-hope.vuejs.press/).

  - le plugin `blog` fournit .

    - l'index du blog (ex : page `/[locale]/article/`) liste tous les articles, sauf pour les fichiers `.md` déclarant `article: false`,
    - des catégories (ex : `/[locale]/category/ma-category/`),
    - des tags : `/[locale]/tag/mon-tag/`),
    - et autres fonctionnalités associés deviennent disponibles.
    - il est possible de [réaliser davantage de configuration du blogging dans `theme.ts`](https://theme-hope.vuejs.press/guide/blog/), mais, personnellement, je ne les utilise pas.

  - le plugin `comment` permet d'activer l'ajout de commentaires basé l'extension GitHub nommé `Giscus` qui crée des tickets dans le système de tickets GitHub de votre dépôt.

    - je ne décris pas ici comment l'activer, car [cela est réalisé par l'auteur du thème VuePress](https://theme-hope.vuejs.press/config/plugins/comment.html#intro).

  - le plugin `mdEnhance` est configuré pour un usage normal (et je recommande de ne pas trop activé d'options pour que Netlify puisse compiler le site web au déploiement)

    - il permet d'écrire du markdown avec des syntaxes complémentaires, comme aligner du text, ajouter des attributs personnalisés (ex : une classe CSS), des classes CSS _container_ pour contrôler le style d'un ou plusieurs pages, etc...
    - je vous laisse découvrir.

  - le plugin `pwa` a été désactivé même s'il génère encore un fichier `service-worker.js` à la racine du site (`https://example.com/service-worker.js`).

### Personnaliser les pages par défaut

Je ne détaillerai pas comment créer votre site, car cela dépend beaucoup de votre besoin.

Voici les exemples de sites :

- le présent site, où vous vous trouvez, est créé avec le modèle (en fait, il a servi de base pour le modèle).
- le site de mon activité de microentreprise : [www.puzzlout.com](https://www.puzzlout.com).
- le site d'une productrice de quinoa que j'ai réalisé au premier semestre 2023 : [www.inflorescences-quinoa.fr/](https://www.inflorescences-quinoa.fr/)
- le site de la méthode _Passons le C.A.P_ : [wwww.passonslecap.fr](http://passonslecap.fr/)

Pour des conseils et des besoins particuliers, [contactez-moi](../../page/contactez-moi/README.md).

Sinon, continuer avec [l'étape de déploiement](../deployer-son-site-moderne-rapide/README.md)

[< Retour à la table des matières](../comment-realiser-son-site-moderne-et-rapide/README.md)
