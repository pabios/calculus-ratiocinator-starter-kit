> ©️ BALDE Ismaila

# Calculus Ratiocinator

Initiation à la __Programmation Fonctionnelle__ avec __TypeScript__ et l'environnement d'exécution __Bun__ (<https://bun.sh>).

<!-- Onglet Docker -->
<details open>
<summary>🚀 Lancer le Projet avec Docker</summary>

### Prérequis
- Docker doit être installé : [Installer Docker](https://www.docker.com/products/docker-desktop/)

### Instructions
1. **Construire et lancer le conteneur :**
```bash
   docker compose up --build
```
2. **Entrer dans le conteneur :**
```bash
docker exec -it bun-container bash
```
* Lancer les tests
```bash
root@<container-id>:/app#  bun test
```
* Sortir du conteneur
```bash
root@<container-id>:/app#  exit
```
3. Afficher les logs en direct
```bash
docker logs -f bun-container
```
4. **Arrêter le conteneur : -v (Supprime les volumes avec)**
```bash
docker compose down -v
```
</details>

<!-- Onglet Installation Locale --> <details> <summary>🛠️ Installation Locale</summary>


## Installation des dépendances

```sh
bun install
```

## Exécution

```sh
bun start
```

## Exécution avec hot reloading

```sh
bun dev
```

## Exécution des tests unitaires

```sh
bun test
```

--
</details> ```

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>

