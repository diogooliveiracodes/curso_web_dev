# Instalação do Typescript globalmente
```
npm install -g typescript
```

# Instalar globalmente o pacote ts-node (para rodar no terminal)
```
npm i -g ts-node
```

# Utilizar o typescript no navegador
- Primeiro lembre-se de navegar no terminal até chegar na pasta desejada:
```cd capitulo_02/aula_23/projetoTypescript```

- Criar o arquivo package.json
```npm init```

- Intalar o Live Server
```npm i -s live-server```

- Criar arquivo de configuração do Typescript
## navegue até a pasta do arquivo principal do typescript
```cd src```
## crie o arquivo de configuração do typescript
```tsc --init```

<!-- - Compilar o arquivo typescript
```tsc --outdir dist app.ts``` -->
- Compilar em tempo de execução (na pasta do arquivo ts)
```tsc -w```

## Pacote que permite utilização de modulos no navegador
```npm i -s systemjs@0.21.5```

- configurar arquivo index.html
```
    <script src="node_modules\systemjs\dist\system.js"></script>
    <script src="src/dist/app.js"></script>
    <script>
        SystemJS.config({
            baseUrl: '/src/dist',
            packages: {
                '/src': {
                    defaultJSExtension: true
                }
            }
        })

        SystemJS.import('src/dist/app.js')
    </script>
```
