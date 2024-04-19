# COMANDOS DE GIT

## inicializando

`git init -b main` / `git init` : Inicializamos nuestro repositorio local
`git add .`
`git commit -m "initial commit"`


## Informativos

`git status`: permite ver la lista de los archivos nuevos añadidos sin commitear

`git log`: permite ver todos los cambios realizados **con detalle**

`git log --online`

# GitHub
## Subiendo por Primera vez a GitHUB
1. `git init -b main`
2. `git add .`
3. `git commit -m "initial commit"`
   
Ahora para subir a GitHub:

4. `git remote add origin https://github.com/nmoncada93/herramientas2-pec-1.git`
5. `git branch -M main`
6. `git push -u origin main`