# Cadastro do Carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro

**Requisitos NãO FUNCIONAIS**

**REGRAS DE NEGÓCIO**
Não de ser possível cadastrar um carro com uma placa existente
Não deve ser possível alterar a placa de um carro já cadastrado
O carro deve ser cadastrado por padrão com disponibilidade
O usuário responsavel pelo cadastro deve ser um administrador

# Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponível
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**Requisitos NãO FUNCIONAIS**

**REGRAS DE NEGÓCIO**
O usuário não precisa estar logado para ver a lista de carros

# Cadastro de especificação no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação de um carro
Deve ser possívivel listar todas as especificações
Deve ser possívivel listar todas os carros

**Requisitos NãO FUNCIONAIS**

**REGRAS DE NEGÓCIO**
Não deve ser possível cadastrar uma especificação para um carro inexistente
Não deve ser possível cadastrar uma expecificação jáexistente para um carro
O usuário responsavel pelo cadastro deve ser um administrador

# Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**Requisitos NãO FUNCIONAIS**
Utilizar o muter para upload dos arquivos

**REGRAS DE NEGÓCIO**
O usuário deve poder cadastrar várias imagens para o mesmo carro
O usuário responsavel pelo cadastro deve ser um administrador

# Agendamento de Alugel

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel

**Requisitos NãO FUNCIONAIS**

**REGRAS DE NEGÓCIO**
O aluguel deve ter duração minima de 24h
Não deve ser possivel cadastrar um aluguel se já existe um aberto para um mesmo carro
