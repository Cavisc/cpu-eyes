<p align="center">
    <img width="256" height="256" src="./assets/cpu_eyes.gif"/>
</p>

# CPU Eyes

Um monitor de CPU simples e eficiente, construído com Electron, HTML, CSS e JavaScript. O CPU Eyes fornece informações detalhadas sobre o seu sistema, incluindo:

- **Uso da CPU:** A porcentagem atual de utilização da CPU.
- **Processo mais utilizado:** O processo que está consumindo mais recursos da CPU no momento.
- **Velocidade do clock:** A frequência atual do processador, em GHz.
- **Uso da RAM:** A quantidade de memória RAM em uso, em GB.

## Tecnologias Utilizadas

- **Electron (v31.3.1):** Framework para criar aplicativos de desktop com tecnologias web.
- **HTML, CSS, JavaScript:** Linguagens padrão para desenvolvimento web.
- **systeminformation (v5.23.3):** Biblioteca Node.js para obter informações detalhadas sobre o sistema.

## Build

Para construir o aplicativo para diferentes sistemas operacionais, utilize os seguintes comandos:

- **Windows:** `npm run windows`
- **macOS:** `npm run mac`
- **Linux:** `npm run linux`
