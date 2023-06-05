# Aula 45: Segurança e boas práticas (19 de maio - sexta-feira)


### Identificar os tipos de ataques mais comuns:

Existem vários tipos de ataques comuns em aplicações PHP. Aqui estão alguns dos mais frequentes:

- Injeção de SQL: Nesse tipo de ataque, um invasor tenta inserir comandos SQL maliciosos em uma consulta SQL para manipular o banco de dados subjacente. Isso pode permitir que o invasor acesse, altere ou exclua dados no banco de dados.

- Cross-Site Scripting (XSS): É um ataque em que um invasor injeta código malicioso em uma aplicação web para executar scripts em navegadores de outros usuários. Isso pode permitir que o invasor roube informações confidenciais, como cookies de sessão, ou redirecione os usuários para sites falsos.

- Cross-Site Request Forgery (CSRF): Nesse tipo de ataque, um invasor engana um usuário autenticado a realizar ações não intencionais em um aplicativo em que o usuário já está autenticado. Isso é feito usando solicitações HTTP manipuladas que exploram a confiança do aplicativo nas solicitações recebidas.

- Inclusão de arquivo remoto: Nesse ataque, um invasor tenta explorar a função "include" ou "require" para incluir arquivos remotos maliciosos no código PHP. Isso pode permitir que o invasor execute código arbitrário no servidor web.

- Ataques de força bruta: Esse tipo de ataque envolve tentativas repetidas e automatizadas de adivinhar senhas ou chaves de acesso por meio de tentativa e erro. Os atacantes usam dicionários de senhas comuns ou geram senhas aleatórias para tentar obter acesso não autorizado.

- Injeção de código PHP: Nesse tipo de ataque, um invasor tenta inserir código PHP malicioso em uma aplicação web para executar ações indesejadas no servidor. Isso pode permitir que o invasor assuma o controle completo do servidor.

Esses são apenas alguns exemplos dos tipos de ataques mais comuns em aplicações PHP. É importante estar ciente dessas vulnerabilidades e adotar boas práticas de segurança, como validar e filtrar dados de entrada, usar prepared statements para consultas SQL, escapar caracteres especiais em saídas HTML e implementar autenticação e autorização adequadas.

### Injeção de SQL

A injeção de SQL é um tipo comum de ataque que visa explorar falhas de segurança em aplicativos web que interagem com bancos de dados por meio de consultas SQL. Esse tipo de ataque ocorre quando um invasor consegue inserir comandos SQL maliciosos em uma consulta, manipulando assim o comportamento do banco de dados subjacente.

O processo geral de um ataque de injeção de SQL é o seguinte:

- Um aplicativo web recebe dados de entrada do usuário, como formulários ou parâmetros de URL, que são usados em consultas SQL.
- O invasor manipula intencionalmente esses dados de entrada, inserindo caracteres ou sequências que alteram a estrutura da consulta SQL original.
- A consulta SQL modificada é enviada ao banco de dados para processamento.
- Se as devidas precauções de segurança não foram tomadas, o banco de dados executa a consulta modificada, tratando-a como parte legítima da consulta original.
- O banco de dados executa o comando SQL malicioso e pode permitir que o invasor acesse, modifique ou exclua dados no banco de dados.

Os objetivos de um ataque de injeção de SQL podem incluir:

- Acesso não autorizado a informações confidenciais do banco de dados.
- Manipulação de dados no banco de dados, como alteração ou exclusão de registros.
- Execução de comandos adicionais no banco de dados, como criação de contas de usuário falsas ou inclusão de dados maliciosos.

Para proteger seu aplicativo contra ataques de injeção de SQL, é importante seguir as melhores práticas de segurança, como:

- Usar prepared statements ou consultas parametrizadas: Utilize recursos oferecidos pela linguagem ou framework PHP, como "prepared statements" ou consultas parametrizadas, em vez de concatenar diretamente os valores nas consultas SQL. Isso ajuda a separar os dados dos comandos SQL, evitando a injeção de código malicioso.
- Validar e filtrar dados de entrada: Verifique e filtre cuidadosamente todos os dados de entrada do usuário para garantir que eles estejam em um formato esperado e seguro. Isso pode envolver a remoção de caracteres especiais ou aplicação de regras de validação específicas.
- Limitar privilégios de acesso ao banco de dados: Certifique-se de que a conta de usuário usada pelo aplicativo tenha apenas os privilégios necessários para executar as operações esperadas. Evite usar uma conta de usuário com privilégios de administrador em um aplicativo.
- Sanitizar saídas de dados: Ao exibir dados do banco de dados em seu aplicativo, certifique-se de sanitizar esses dados corretamente para evitar a execução indesejada de código, especialmente quando exibidos em páginas da web.
- Utilizar mecanismos de segurança adicionais: Considere o uso de firewalls de aplicativos web (WAFs) ou ferramentas de segurança específicas para detectar e prevenir ataques de injeção de SQL.

Ao implementar essas práticas de segurança, você pode reduzir significativamente o risco de ataques de injeção de SQL em seu aplicativo PHP e proteger a integridade e segurança dos dados armazenados no banco de dados

### Cross-Site Scripting (XSS)

O ataque de Cross-Site Scripting (XSS) ocorre quando um invasor consegue injetar código malicioso em uma aplicação web, que é então executado nos navegadores dos usuários que acessam essa aplicação. O código malicioso é tipicamente escrito em JavaScript, mas também pode ser em outras linguagens de script.

Existem diferentes formas de XSS, mas a mais comum é o XSS armazenado (Stored XSS). Nesse caso, o código malicioso é armazenado no servidor da aplicação web e é exibido para os usuários quando eles acessam determinada página ou recurso. Por exemplo, imagine um campo de comentários em um blog, onde os comentários são exibidos para todos os usuários. Se um invasor conseguir inserir um código JavaScript malicioso nesse campo de comentários e ele for armazenado no servidor, sempre que alguém visualizar esse comentário, o código será executado no navegador dessa pessoa.

O objetivo do ataque de XSS pode variar, mas geralmente inclui:

Roubo de informações: O invasor pode usar o código malicioso para obter acesso a informações confidenciais dos usuários, como cookies de sessão, detalhes de login, histórico de navegação, etc. Com acesso a essas informações, o invasor pode realizar atividades maliciosas, como assumir a identidade do usuário.

Redirecionamento do usuário: O invasor pode usar o código malicioso para redirecionar os usuários para sites falsos, que podem parecer legítimos, mas são projetados para roubar informações de login ou disseminar malware.

Manipulação do conteúdo: O invasor pode modificar o conteúdo da página exibida para os usuários, inserindo links ou redirecionamentos para sites maliciosos, exibindo mensagens falsas, entre outros.

Para prevenir ataques de XSS, é importante implementar medidas de segurança adequadas, como a validação e filtragem correta dos dados de entrada, especialmente aqueles fornecidos pelos usuários. Além disso, o uso de funções de escape de HTML ao exibir dados dinâmicos na página pode ajudar a evitar a execução indesejada de código.

### Cross-Site Request Forgery (CSRF)

O Cross-Site Request Forgery (CSRF) é um tipo de ataque em que um invasor explora a confiança de um aplicativo em solicitações recebidas de um usuário autenticado. O ataque ocorre quando um usuário legítimo é enganado a executar ações indesejadas sem o seu conhecimento ou consentimento.

O funcionamento básico de um ataque CSRF envolve os seguintes passos:
- O usuário legítimo está autenticado em um aplicativo web e possui uma sessão válida.
- O invasor cria uma página ou envia um link malicioso para o usuário legítimo, geralmente por meio de e-mails, mensagens instantâneas, fóruns ou redes sociais.
- Quando o usuário legítimo clica no link ou visita a página maliciosa, o código contido nela faz uma solicitação HTTP para uma ação específica em um aplicativo que o usuário já está autenticado, por exemplo, enviar uma solicitação de alteração de senha.
- Essa solicitação é enviada automaticamente para o aplicativo alvo, aproveitando a confiança do aplicativo nas solicitações autenticadas do usuário.
- O aplicativo processa a solicitação maliciosa como se fosse legítima, já que vem de um usuário autenticado, e realiza a ação solicitada pelo invasor, como alterar a senha ou fazer uma transferência de fundos.

O perigo desse tipo de ataque é que o usuário legítimo não tem conhecimento de que uma ação indesejada foi realizada em seu nome, pois a solicitação é enviada automaticamente pelo navegador sem o seu consentimento explícito. Os ataques CSRF são especialmente perigosos quando envolvem ações críticas, como alteração de configurações, exclusão de dados ou transferências financeiras.

Para mitigar os ataques CSRF, as seguintes medidas de segurança são recomendadas:

- Utilizar tokens CSRF: Implementar o uso de tokens CSRF (Cross-Site Request Forgery) em formulários e solicitações que alteram dados sensíveis. Esses tokens são gerados aleatoriamente e incluídos nas solicitações, tornando-as exclusivas e não replicáveis.
- Verificar a origem da solicitação: O aplicativo deve verificar se a solicitação vem de uma fonte confiável, como um referenciador válido, um cabeçalho personalizado ou um campo oculto no formulário.
- Restringir ações sensíveis: Limitar o acesso a ações sensíveis apenas por meio de métodos HTTP específicos (por exemplo, apenas POST) ou solicitar autenticação adicional (como digitar novamente a senha) antes de executar a ação.
- Implementar SameSite cookies: Definir cookies com a propriedade SameSite como "Strict" ou "Lax" para evitar que sejam enviados em solicitações de terceiros não confiáveis.
- Educação e conscientização: Os usuários devem ser educados sobre os riscos de clicar em links desconhecidos e devem ser incentivados a verificar a legitimidade de uma página antes de fornecer informações ou realizar ações sensíveis.
- Política de CORS (Cross-Origin Resource Sharing): Implementar uma política de CORS para restringir o acesso a recursos de origens não confiáveis.

A aplicação dessas práticas de segurança pode ajudar a mitigar o risco de ataques CSRF em aplicações web.

### Inclusão de arquivo remoto

A inclusão de arquivo remoto é um tipo de ataque em que um invasor tenta explorar a função "include" ou "require" em PHP para incluir arquivos remotos maliciosos no código de um aplicativo. Isso pode permitir que o invasor execute código arbitrário no servidor web, o que pode levar a várias consequências prejudiciais.

O processo básico desse ataque é o seguinte:
- O invasor identifica um ponto de inclusão de arquivo no código PHP do aplicativo, onde a função "include" ou "require" é usada para incluir arquivos.
- O invasor manipula o parâmetro passado para a função de inclusão, inserindo um URL remoto que aponta para um arquivo malicioso hospedado em outro servidor.
- Quando o código PHP é executado, a função de inclusão é acionada e o arquivo remoto malicioso é baixado e executado no servidor web.
- O código malicioso incluído pode permitir que o invasor execute ações indesejadas no servidor, como roubar informações, criar contas de usuário falsas, alterar arquivos ou comprometer a segurança do sistema.

Para proteger seu aplicativo contra ataques de inclusão de arquivo remoto, você pode adotar as seguintes práticas de segurança:

- Evitar inclusões de arquivo com base em entrada do usuário: Evite incluir arquivos com base em entradas não confiáveis fornecidas pelos usuários, como parâmetros de URL ou dados de formulários. Se possível, limite as inclusões de arquivo apenas a arquivos locais do servidor.
- Validar e filtrar dados de entrada: Certifique-se de validar e filtrar todos os dados de entrada do usuário, incluindo URLs, antes de usá-los em funções de inclusão de arquivo. Isso pode envolver a verificação de padrões específicos, remoção de caracteres especiais ou aplicação de listas de permissões para permitir apenas URLs confiáveis.
- Utilizar caminhos de arquivo absolutos: Sempre que possível, use caminhos de arquivo absolutos em vez de caminhos relativos ao incluir arquivos. Isso evita que o invasor explore a resolução de caminhos relativos para incluir arquivos maliciosos.
- Aplicar restrições de acesso ao sistema de arquivos: Configure permissões adequadas para os arquivos e diretórios do aplicativo para limitar o acesso não autorizado. Restrinja as permissões de gravação e execução apenas para os usuários necessários.
- Manter o software atualizado: Mantenha todas as bibliotecas, frameworks e componentes utilizados pelo aplicativo atualizados, incluindo o próprio PHP. Isso ajuda a garantir que quaisquer vulnerabilidades conhecidas sejam corrigidas.
- Implementar listas de permissões de inclusão de arquivo: Crie listas de permissões que especifiquem quais arquivos podem ser incluídos pelo aplicativo. Isso limita as opções de inclusão a um conjunto confiável de arquivos pré-aprovados.

Ao seguir essas práticas, você pode ajudar a prevenir ataques de inclusão de arquivo remoto em seu aplicativo PHP e garantir a segurança do servidor web.