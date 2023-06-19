# Aula 40: Configurações do php.ini, nginx e docker (08 de maio - segunda-feira)

## Objetivos

- Compreender a importância do php.ini em um ambiente de desenvolvimento PHP.
- Conhecer as configurações mais comuns do arquivo php.ini.
- Aprender a editar o arquivo php.ini para personalizar o ambiente de desenvolvimento.
- Conhecer o servidor web Nginx.
- Aprender a configurar o Nginx para trabalhar com o PHP.
- Conhecer o Docker.

## PHP.INI

- O php.ini é um arquivo de configuração usado pelo PHP para definir vários parâmetros e opções que controlam o comportamento do interpretador PHP. Ele é fundamental para garantir o correto funcionamento de um aplicativo PHP e pode ser usado para personalizar a configuração do servidor.

- O arquivo php.ini é dividido em seções que contêm definições para diretivas específicas, como exibição de erros, limites de tempo de execução, conexões de banco de dados, entre outras. As alterações feitas no arquivo php.ini afetam diretamente o comportamento do PHP e podem ser usadas para melhorar o desempenho, a segurança e a estabilidade de um aplicativo.

- Algumas diretivas comuns incluem a exibição de erros, que pode ser ativada para ajudar na depuração de aplicativos, o tempo máximo de execução, que define o tempo máximo permitido para que um script PHP seja executado, e a diretiva memory_limit, que controla a quantidade máxima de memória que um script PHP pode consumir.

- O php.ini pode ser editado usando um editor de texto simples, mas é importante tomar cuidado ao fazer alterações, pois uma alteração incorreta pode causar problemas no aplicativo. O arquivo php.ini pode ser encontrado em diferentes locais dependendo da configuração do servidor, mas geralmente está localizado na pasta de configuração do PHP.

- Em resumo, o php.ini é um arquivo de configuração importante que controla o comportamento do PHP e pode ser usado para personalizar a configuração do servidor. É importante entender suas diretivas para otimizar o desempenho, a segurança e a estabilidade do aplicativo.

## NGINX

- O Nginx é um servidor web de alto desempenho, escalável e leve que tem como objetivo fornecer serviços de internet eficientes. Ele foi lançado pela primeira vez em 2004 e rapidamente se tornou uma das principais opções de servidores web para sites e aplicativos em todo o mundo.

- Uma das principais características do Nginx é sua arquitetura assíncrona e baseada em eventos, o que significa que ele pode lidar com um grande número de conexões simultâneas sem comprometer a velocidade ou a estabilidade do servidor. Ele também oferece suporte para vários protocolos de internet, como HTTP, HTTPS, SMTP e POP3, além de suportar módulos personalizados que permitem estender suas funcionalidades.

- Outra característica importante do Nginx é sua capacidade de balanceamento de carga, que permite distribuir o tráfego de um site ou aplicativo entre vários servidores para melhorar o desempenho e a disponibilidade. Além disso, ele pode ser usado como um proxy reverso, que permite que um servidor atue como intermediário entre um cliente e um servidor web, melhorando ainda mais a escalabilidade e a segurança do site.

- O Nginx é altamente configurável e personalizável, o que significa que pode ser ajustado para atender às necessidades específicas de um site ou aplicativo. Ele também é conhecido por sua facilidade de uso e instalação, o que o torna uma excelente escolha para desenvolvedores que desejam implantar rapidamente um servidor web seguro e eficiente. Em resumo, o Nginx é uma escolha sólida para qualquer pessoa que precise de um servidor web rápido, seguro e escalável.

## DOCKER

- O Docker é uma plataforma de software de virtualização de contêineres que permite que aplicativos e serviços sejam empacotados, distribuídos e executados de forma consistente e confiável em diferentes ambientes. Ele é baseado na tecnologia de contêineres Linux e usa recursos do sistema operacional subjacente para isolar e gerenciar os aplicativos e suas dependências.

- O Docker simplifica o processo de desenvolvimento, implantação e gerenciamento de aplicativos, fornecendo uma maneira fácil e portátil de empacotar e distribuir aplicativos em contêineres. Com o Docker, é possível criar um ambiente consistente e replicável para desenvolvimento, teste e produção, eliminando a necessidade de instalar e configurar manualmente as dependências do aplicativo.

- Além disso, o Docker oferece recursos avançados de gerenciamento de contêineres, como balanceamento de carga, escalabilidade horizontal e monitoramento de recursos, permitindo que os aplicativos sejam dimensionados rapidamente para atender às necessidades do negócio.

- O Docker é suportado por uma ampla variedade de plataformas e infraestruturas, incluindo nuvens públicas e privadas, data centers on-premise e desktops de desenvolvimento. Ele também é compatível com uma ampla variedade de ferramentas e tecnologias de código aberto, como Kubernetes, Jenkins, Ansible e muitos outros.

- Em resumo, o Docker é uma plataforma de virtualização de contêineres de software que oferece uma maneira fácil e portátil de empacotar, distribuir e executar aplicativos em diferentes ambientes. Ele simplifica o processo de desenvolvimento, implantação e gerenciamento de aplicativos, fornecendo recursos avançados de gerenciamento de contêineres e compatibilidade com uma ampla variedade de ferramentas e tecnologias.