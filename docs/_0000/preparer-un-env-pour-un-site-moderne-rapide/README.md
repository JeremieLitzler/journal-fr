---
title: 'Préparer un environnement de gestion de son site web sur un PC lambda en 2 étapes'
description: "La première étape pour créer son site web moderne et rapide, c'est de préparer le PC pour le créer."
heroImage: /images/2023-04-19-jamstack-javascript-apis-markup.webp
heroAlt: Diagramme expliquant l'organisation de la JAMSTACK
date: 2023-04-19
head:
  - [
      link,
      {
        rel: canonical,
        href: https://jeremielitzler.fr/2023/??/preparer-un-env-pour-un-site-moderne-rapide/,
      },
    ]
category:
  - Tutoriels
tag:
  - Web
article: false
---

![Diagramme expliquant l'organisation de la JAMSTACK](/images/2023-04-19-jamstack-javascript-apis-markup.webp 'Image issue de l\'article ["New to Jamstack? Everything You Need to Know to Get Started"](https://snipcart.com/blog/jamstack) de Snipcart.')

La première étape pour créer son site web moderne et rapide, c'est de préparer le PC pour le créer.

<!-- more -->

## Pré-requis

- Un ordinateur personel avec :
  - Windows 10 ou 11,
  - 8 Go LPDDR4,
  - un disque de 256 Go SSD
  - et un processeur Intel Celeron J4125 Quad Core
- Un compte e-mail (Google ou autre)
- Un compte GitHub (créé avec votre compte e-mail)
- Un compte Netlify (lié à votre compte GitHub)
- Optionnellement, un compte chez un registar (OVH, Infomaniak, etc.) pour le nom de domaine, si vous souhaitez une URL 100% personnalisée.

:::tip Par défaut, Netlify fournit une URL
Le sous domaine est configurable, sous réserve de disponibilité.

L'application serait alors disponible sous `https://mon-site.netlify.app`.
:::

## Créer le dépôt sur GitHub

Une fois que vous avez à disposition tous les pré-requis, on commence par créer le dépôt depuis votre compte GitHub.

Pour cela, connectez-vous à votre compte GitHub et :

1. Rendez-vous sur [https://github.com/new](https://github.com/new).
2. Remplissez les champs :

- `Repository name`
- `Description`
- Choisissez le visibilité : `Public` ou `Private`.
- Ignorez la suite qui sera copié du modèle

![Créer le dépôt sur GitHub](./images/creer-le-depot-sur-github.jpg)

3. Cliquez `Create repository` pour terminer.

## Préparer le poste de développement

Une fois que le dépôt est prêt, je vous invite à préparer votre poste de développement.

Il faut :

- Installer [Git bash](https://git-scm.com/downloads). Allez visualiser [ma vidéo sur le sujet](https://youtu.be/eHTZ-2qY19s).

- Installer [NodeJS 18.6.0](https://nodejs.org/en/blog/release/v18.6.0/) en cliquant suivant (aucune personnalisation n'est nécessaire).

- Installer [Visual Studio Code](https://code.visualstudio.com/download) en cliquant suivant (aucune personnalisation n'est nécessaire).

- Configurer l'explorateur Windows pour afficher les dossiers et fichiers cachés (ex : fichier `.gitignore`, dossier `.vscode`)

  - Ouvrez l'explorateur de fichiers et sélectionner le menu `Options` comme indiqué ci-dessous :
    ![Ouvrir les options de visualisation des dossiers](./images/ouvrir-les-options-de-visualisation-des-dossiers.jpg)

  - Sélectionnez l'affichage des dossiers et fichiers cachés :
    ![Sélectionner l'option d'afficher les fichiers et dossiers cachés](./images/selectionner-loption-dafficher-les-fichiers-et-dossiers-caches.jpg)

- Lancer Visual Studio Code et tapez `CTRL+SHIFT+P` puis `Terminal` pour sélectionner le profil `Git Bash`
  ![Changer le profil du terminal](./images/changer-le-profil-du-terminal.jpg)
  Et :
  ![Sélectionner git bash](./images/selectionner-git-bash.jpg)

:::note Peut-être que tout est bon si vous avez suivi l'étape à l'installation de Git.
L'étape précédente est là, au cas où ce n'est pas le cas.

Toutefois, comme j'ai le même PC depuis un moment, je veux juste être sûr qu'on a tous la même configuration de poste.
:::

- Tapez `CTRL+ù` pour ouvrir le terminal avec `Git Bash`
  ![Le terminal est lancé avec Git Bash](./images/le-terminal-est-lance-avec-git-bash.jpg)

Vous êtes prêts à cloner les dépôts !

Cliquez sur le lien suivant pour [créer votre site web moderne et rapide](../creer-son-site-moderne-rapide/README.md).

[< Retour à la table des matières](../comment-realiser-son-site-moderne-et-rapide/README.md)
