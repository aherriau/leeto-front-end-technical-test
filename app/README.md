# Leeto - Test technique développeur front-end - App front

## Commandes
- Installer les dépendances : `yarn install`
- Lancer l'application : `yarn dev`
- Lancer la suite de tests : `yarn test`
- Lancer le Storybook : `yarn storybook`

## Rendu visuel du projet

### Page qui liste les cartes cadeaux actives et clôturées

<img width="1440" alt="Capture d’écran 2025-03-05 à 10 05 39" src="https://github.com/user-attachments/assets/09f2e2c3-5cb2-4061-9201-cd83d8f09cef" />
<img width="1440" alt="Capture d’écran 2025-03-05 à 10 05 46" src="https://github.com/user-attachments/assets/d3b6448a-81b2-4970-803f-aec99afee9ac" />
<img width="261" alt="Capture d’écran 2025-03-05 à 10 06 51" src="https://github.com/user-attachments/assets/2989f265-dc58-4a4f-a140-f4d383b98b4e" />
<img width="261" alt="Capture d’écran 2025-03-05 à 10 07 13" src="https://github.com/user-attachments/assets/f452863f-b06a-48a5-81bc-f03919f4aa7f" />


### Page qui affiche le détail d'une carte cadeau

<img width="1440" alt="Capture d’écran 2025-03-05 à 12 50 57" src="https://github.com/user-attachments/assets/f365ca30-143f-4b28-9b7f-5d8530beb24e" />
<img width="261" alt="Capture d’écran 2025-03-05 à 12 51 24" src="https://github.com/user-attachments/assets/7009a30d-ae52-4f24-9428-97735feed3d0" />
<img width="261" alt="Capture d’écran 2025-03-05 à 12 51 49" src="https://github.com/user-attachments/assets/2c9bdd85-c97a-4247-801d-cb225e09a043" />


## Idées d'améliorations
- Utiliser des queries paginées pour charger les cartes cadeaux actives et clôturées
- Mieux gérer les erreurs retournées par les appels API comme une carte cadeau qui n'existe pas en base par exemple
- Mutualiser plus de composants pour pouvoir les ré-utiliser comme les contenants des cartes cadeaux et des bénéficiaires (`CardContainer`) par exemple mais aussi le lien de retour (`BackLink`), etc.
- Choisir une librairie d'icônes qui contient tous ceux présents sur les maquettes Figma pour éviter de devoir les ajouter au projet (je n'ai pas réussi à trouver les 2 lignes superposées sur MDI par exemple)
- Ajouter plus de tests et de stories
