# Desenvolvimento

## Índice

* [Recomendações a Seguir](#recomendações)

### Passo 1: Criando Rotas

Importe os componentes relevantes para agrupar o aplicativo e criar o roteamento da página. Não importa que ainda não tenhamos os componentes que irão em cada view, por enquanto você pode deixar apenas um div.

### Passo 2: Crie componentes para cada rota

Vamos criar as rotas.

* Para [/home](/docs/functionalities.md#page-1-start-home) mapeie as informações da API e devolva um Cartão para cada dentista
* Lembre-se que para a página [/login](/docs/functionalities.md#page-2-login) você deve implementar a validação no formulário existente.
* Crie um Link dinâmico para o detalhe de cada dentista em [/dentista/:id](/docs/funcionalidades.md#pagina-3-detalle-dentista)

### Passo 3: Implementação do Contexto Global
Assim que tivermos toda a estrutura da nossa aplicação, podemos começar a consumir a API fazendo uma chamada de fetch ou axios.
* Devem guardar esta informação num contexto global, juntamente com o tema da app.
* Usando useReducer, crie os métodos necessários para gerenciar seu comportamento (alterando o tema do App e salvando a resposta da API no Contexto).

### Passo 4: Consumir Contexto Global
Com as informações já em mãos, passamos a "preencher" as lacunas que deixamos em nossa estrutura anterior, inscrevendo nossos componentes no contexto global (somente aqueles que precisam de informações dele).

### Etapa 6: estilizando os principais componentes
Com base no Tema atual, deve-se passar uma determinada variante de cores para os componentes pertencentes às rotas (Home.jsx, Detail.jsx, Contact.jsx). É opcional mas não obrigatório estilizar mais seções, esta opção terá peso na avaliação da nota final

### Passo 7: Teste
Por último, mas não menos importante, você precisará realizar os testes associados ao seu aplicativo. Para fazer isso, você deve criar um novo arquivo no diretório /src/test/. Lembre-se que embora o número de casos de teste importe, sua relevância também será decisiva para o cumprimento das instruções (não tente fazer muitos testes fáceis apenas para chegar ao número)





