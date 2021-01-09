# Discord pour rec vos conversation

-    [Installation et utilisation](#installation-et-utilisation)
     -    [Configuration du bot](#configuration-du-bot)
     -    [Lancer le Bot](#lancer-le-bot)
          -    [Commencer l'enregistrement](#commencer-l'enregistrement)
          -    [Arreter l'enregistrement](#arreter-l'enregistrement)
     -    [Voir vos enregistrements](#voir-vos-enregistrements)
          -    [Convertire vos fichier en MP3](#convertire-vos-fichier-en-MP3)
-    [Crédits](#crédits)

## Installation et utilisation

Télécharger le code et mettez le dans un dossier créez pour l'occasion
Ou faites :  
```
git clone https://github.com/TheHuman00/rec-discord-bot
```

- Ensuite écriver `npm i` pour télécharger les `node_modules`. (Si vous ne savez pas comment ouvrir une console allez [ici](https://github.com/TheHuman00/rec-discord-bot/blob/master/CONSOLE.md))
- Ensuite installer [FFmpeg](https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-essentials.7z). 
(Si vous ne savez pas comment installer FFMPEG allez [ici](https://github.com/TheHuman00/rec-discord-bot/blob/master/FFMPEG.md))

### Configuration du bot

Remplacer les infos dans le config.json :

```yaml
{
    "BOT_TOKEN": "<LE-TOKEN-DE-VOTRE-BOT-ICI>",
    "PREFIX": "<LE-PREFIX-QUE-VOUS-SOUHAITEZ-ICI>"
}
```

## Lancer le Bot

Lancer votre bot en faisant `npm start`.

### Commencer l'enregistrement

```
<PREFIX>enter 
ou
<PREFIX>join
```

**Note:** Vous allez entendre un son et cela signifie que l'enregistrement à commencer.

### Arreter l'enregistrement

```
<PREFIX>exit 
ou
<PREFIX>quitter
```

**Note:** Vous allez entendre un son et cela signifie que l'enregistrement est terminé.

## Voir vos enregistrements

Pour cela écrivez dans votre console :

```
node ./bin/merge.js
``` 

Cela va créé un fichier se nommant `merge.pcm` dans le dossier : `/rec`.


### Convertire vos fichier en MP3

Pour convertir vos ficher *pcm* en fichier *mp3* : 

```
cd rec

ffmpeg -f s16le -ar 44.1k -ac 2 -i merge.pcm output.mp3

cd ..
```

Et voilà dans le dosier `/rec` se trouve un dossier se nomant output.mp3.

**Note:** Un ligne à la fois ! Pas toutes les lignes en même temps dans votre console.

## Crédits

[@eslachance](https://github.com/eslachance) Pour [gist](https://gist.github.com/eslachance/fb70fc036183b7974d3b9191601846ba)

[@chebro](https://github.com/eslachance) Pour [gist](https://github.com/chebro/discord-voice-recorder)
