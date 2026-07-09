# 🌐 Dev Atlas

> Seu mapa para o mundo do desenvolvimento web.

Uma base de conhecimento open source voltada para iniciantes em programação e desenvolvimento web. O objetivo é reunir conteúdos objetivos, exemplos práticos e boas práticas num único lugar — sem enrolação.

---

## 🎯 Proposta

Não é um curso. É um **material de consulta e aprendizado rápido** para quem quer entender como as tecnologias funcionam e ter uma referência sempre à mão.

- Linguagem simples, sem jargão desnecessário
- Exemplos práticos e funcionais
- Boas práticas desde o primeiro dia
- Do zero absoluto até conceitos intermediários

---

## 👥 Para quem é

| Perfil | Como usar |
|--------|-----------|
| Nunca programou | Comece pelo módulo **Fundamentos da Programação** |
| Está aprendendo HTML/CSS/JS | Use como referência rápida enquanto pratica |
| Conhece o básico e quer revisar | Navegue pelos módulos que precisar |
| Quer aprender React | Módulo completo com TSX, hooks e exemplos reais |

---

## 📚 Módulos

### 💡 Fundamentos da Programação
> *Por onde tudo começa — antes de qualquer linguagem*

- O que é programar e como o computador pensa
- Algoritmos, pseudocódigo e fluxogramas
- Variáveis e tipos de dados
- Entrada e saída com `alert()`, `prompt()` e `confirm()`
- Estrutura HTML mínima para rodar seus primeiros scripts
- Erros e debugging com `console.log()`

### 🧠 Lógica de Programação
> *As estruturas que fazem o programa tomar decisões*

- Operadores aritméticos, de comparação e lógicos
- Condicionais — `if/else`, ternário, `switch`
- Loops — `for`, `while`, `do...while`, `break`, `continue`
- Funções — parâmetros, retorno, escopo
- Arrays na prática — percorrer, somar, encontrar o maior valor
- **10 exercícios práticos** com botão "Ver solução"

### 🌍 Fundamentos da Web
> *Como a internet funciona por baixo dos panos*

- O fluxo completo: URL → DNS → TCP → HTTP → Render
- Cliente e Servidor — frontend, backend, full stack
- HTTP e HTTPS — verbos, status codes, TLS
- DNS — registros A, CNAME, MX, propagação
- Navegadores — pipeline de renderização, DevTools
- APIs — REST, endpoints, consumo com `fetch()`
- JSON — tipos, sintaxe, erros comuns

### 📄 HTML
> *A estrutura de tudo na web*

- Estrutura básica e anatomia de uma tag
- Tags de texto, links, imagens e listas
- Formulários — inputs, labels, validação nativa
- Tabelas — thead, tbody, tfoot, colspan
- HTML Semântico — header, main, article, section, aside
- Acessibilidade — alt, aria-label, contraste, skip link

### 🎨 CSS
> *Do cinza sem graça ao layout incrível*

- Cascata, herança e especificidade
- Seletores — combinadores, pseudo-classes, pseudo-elementos
- Box Model e `box-sizing: border-box`
- Display — block, inline, flex, grid
- Flexbox — container e items, alinhamento, gap
- CSS Grid — `fr`, `repeat()`, `grid-template-areas`
- Responsividade — mobile-first, media queries, `clamp()`
- Variáveis CSS — dark/light mode
- Animações — `transition`, `@keyframes`, `transform`

### ⚡ JavaScript
> *A linguagem que dá vida às páginas*

- Variáveis — `let`, `const`, `var`
- Tipos de dados e `typeof`
- Operadores — aritméticos, comparação, lógicos, spread
- Condicionais e loops
- Funções — declaração, expressão, arrow function, closures
- Objetos — desestruturação, spread, `Object.keys/values/entries`
- Arrays — `map`, `filter`, `reduce`, `find`, desestruturação
- DOM — seletores, classList, criar e remover elementos
- Eventos — `addEventListener`, event delegation
- Fetch API — GET, POST, async/await, tratamento de erros
- Promises — then/catch, `Promise.all`

### ⚛️ React
> *A biblioteca que mudou o frontend*

- O modelo mental: `UI = f(estado)` e Virtual DOM
- **JSX vs TSX** — diferenças do HTML, expressões `{}`, Fragments
- Componentes — por que usar, estrutura de pastas, regra do maiúsculo
- Props — tipagem com TypeScript, `children`, somente leitura
- State — `useState`, formulários controlados, imutabilidade
- Eventos — handlers tipados, `React.ChangeEvent`
- Renderização condicional — `if`, ternário, `&&`
- Listas e `key` — `.map()`, por que nunca usar índice
- `useEffect` — dependências, cleanup, memory leak
- Hooks — `useRef`, `useMemo`, `useCallback`, hooks customizados
- Composição — peças pequenas formando interfaces complexas
- Setup com Vite — `npm create vite@latest --template react-ts`

### 🐘 PHP
> *A linguagem do back-end web*

- O que é PHP e sua história (1994 → PHP 8)
- Como PHP se relaciona com a web — stack LAMP, fluxo server-side
- Sintaxe básica — variáveis com `$`, echo, case sensitivity
- Tipos de dados — var_dump, aspas simples vs duplas, heredoc
- Condicionais e loops — if, switch, `match` (PHP 8), for, foreach
- Funções — type hints, nullable types, union types (PHP 8)
- Arrays — indexado, associativo, multidimensional
- Formulários — `$_GET`, `$_POST`, validação, sanitização, sessões

### 🌿 Git
> *Controle de versão, histórico e colaboração*

- Git vs GitHub — o que é cada um
- Os 3 estados: Working Directory, Staging Area, Repository
- Commits — `git add`, `git commit`, mensagens com Conventional Commits
- `git log`, `git diff`, `.gitignore`
- Branches — criar, trocar, renomear, deletar
- Merge — fast-forward, 3-way, resolução de conflitos
- Rebase, stash, `git reset`, `git revert`
- **`git cherry-pick`** — copiar commits específicos entre branches
- GitHub — push, pull, fetch, fork vs clone
- Pull Requests — fluxo completo, code review

### 🛠️ Ferramentas
> *O ambiente que torna tudo mais rápido*

- VS Code — atalhos, extensões essenciais, Prettier, Emmet
- DevTools — Elements, Console, Network, Lighthouse, modo responsivo
- Terminal — navegação, manipulação de arquivos, comandos úteis
- Node.js e npm — package.json, node_modules, nodemon
- Outras — Postman, Figma, Vite, ferramentas de cor e ícones

---

## 🗂️ Estrutura do projeto

```
devatlas/
├── index.html          # Página inicial com todos os módulos
├── programacao.html    # Fundamentos da Programação
├── logica.html         # Lógica de Programação + exercícios
├── fundamentos.html    # Fundamentos da Web
├── html.html           # HTML
├── css.html            # CSS
├── javascript.html     # JavaScript
├── react.html          # React
├── php.html            # PHP
├── git.html            # Git & GitHub
├── ferramentas.html    # Ferramentas
├── style.css           # Folha de estilos compartilhada
└── _include.js         # Nav, footer, tema e scroll-spy (injetados em todas as páginas)
```

---

## ✨ Funcionalidades do site

| Recurso | Descrição |
|---------|-----------|
| 🌙 Tema claro/escuro | Toggle persistido no `localStorage`, aplicado antes do primeiro paint |
| 📱 Responsivo | 5 breakpoints: mobile (≤600px), tablet (≤768px), laptop (≤1050px), desktop, TV (≥1400px) |
| ☰ Menu hamburguer | Painel dropdown full-width em mobile/tablet, sem scroll interno |
| 🔍 Scroll-spy | TOC lateral e sidebar destacam a seção visível automaticamente |
| 💡 Exercícios interativos | Botão "Ver solução" com toggle em cada exercício de lógica |
| 🖨️ Print-friendly | CSS de impressão remove nav, sidebar e footer |
| ♿ Acessível | `aria-label`, `aria-expanded`, `role`, navegação por teclado (Esc fecha o menu) |

---

## 🚀 Como usar

### Ver o projeto localmente

Basta abrir o arquivo `index.html` no browser — não precisa de servidor, build ou instalação.

```bash
# Com VS Code + extensão Live Server:
# Clique com botão direito em index.html → "Open with Live Server"

# Ou simplesmente arraste o index.html para o browser
```

### Navegar pelo conteúdo

1. Abra `index.html` para ver todos os módulos
2. Clique no módulo desejado
3. Use a **sidebar esquerda** para navegar entre seções
4. Use o **índice direito** (TOC) para ir direto ao tópico — ele destaca a seção atual enquanto você rola
5. Em mobile, use o ☰ para abrir o menu de navegação

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se encontrar um erro, quiser melhorar uma explicação ou adicionar um exemplo:

1. Faça um fork do repositório
2. Crie uma branch descritiva: `git switch -c fix/erro-no-exemplo-de-arrays`
3. Faça suas alterações com commits claros seguindo [Conventional Commits](https://www.conventionalcommits.org/)
4. Abra um Pull Request explicando o que mudou e por quê

### Padrões do projeto

- Linguagem: **português brasileiro**
- Exemplos de código: preferencialmente **JavaScript** para conceitos gerais, **TSX** para React
- Sem dependências externas — HTML, CSS e JS puro
- Estilo visual: siga o `style.css` e os componentes existentes (callouts, code-block, cards-grid)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

Sinta-se à vontade para usar, modificar e distribuir — com os devidos créditos.
