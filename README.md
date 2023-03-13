# Bienvenue dans ce chouette projet ou j'ai réalisé une application de création de cookie !


Le but de cet exercice est d'appréhender de façon visuelle comment fonctionne un cookie, comment le créer et le modifier, changer sa date d'expiration, etc..

Tout d'abord, j'ai réalisé une partie de validation de formulaire qui consiste à vérifier si les champs d'entrée de données ne sont pas vides. Pour cela, on utilise un tableau d'input, et on ajoute deux écouteurs d'événements qui vérifient si le champ est invalide et le type d'événement.

Ensuite, il y a la partie de création de cookies. Lorsqu'on clique sur le bouton "Créer", les données des champs d'entrée sont stockées dans un tableau d'objets, puis un cookie est créé à partir de ces données. On utilise la méthode document.cookie pour créer un cookie.

Et enfin, la partie suivante est la récupération des cookies. On utilise la méthode document.cookie pour récupérer les cookies stockés sur le site, puis on les affiche sur la page en créant des éléments HTML pour chaque cookie. On utilise également une fonction de suppression de cookie pour supprimer les cookies lorsqu'on clique sur la croix.

Ce fût un très bon exercice pour commencer à travailler avec les cookies et apprendre leur comportement.
