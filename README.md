# 📱 HelpDesk Frontend

Frontend moderno e responsivo para o sistema de gerenciamento de chamados (HelpDesk), desenvolvido com **Angular 21**.

## 🚀 Visão Geral

O HelpDesk Frontend é uma aplicação web que permite que usuários criem, visualizem e gerenciem chamados de suporte técnico. A plataforma oferece uma interface intuitiva com autenticação segura via JWT e layouts específicos para diferentes tipos de usuário.

**Status:** Em desenvolvimento ✨

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Função |
|-----------|--------|--------|
| **Angular** | 21.2.0 | Framework principal |
| **TypeScript** | 5.9.2 | Linguagem com tipagem |
| **RxJS** | 7.8.0 | Programação reativa |
| **Vitest** | 4.0.8 | Testes unitários |
| **PostCSS** | 8.5.3 | Processamento de CSS |

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18+ recomendado)
- **npm** (versão 11.12.0)
- **Git**
- Um editor de código (VS Code recomendado)

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/HelpDeskFrontend-main.git
cd HelpDeskFrontend-main
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (se necessário):

```env
API_URL=http://localhost:5000/api
```

**Nota:** Atualmente, a URL da API está configurada no arquivo `src/app/services/auth/auth-services.ts`. Você deve atualizar conforme necessário.

---

## 🏃 Como Rodar

### Servidor de Desenvolvimento

```bash
npm start
```
ou

```bash
ng serve
```

A aplicação estará disponível em: **http://localhost:4200/**

A aplicação recarregará automaticamente quando você modificar qualquer arquivo.

### Build para Produção

```bash
npm run build
```

Os arquivos compilados serão salvos em `dist/help-desk-front/`.

### Rodar Testes

```bash
npm test
```

Executa os testes unitários usando Vitest.

### Watch Mode (Desenvolvimento)

```bash
npm run watch
```

Compila o projeto continuamente enquanto você trabalha.

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/                 # Componentes reutilizáveis globais
│   │   ├── button-component/
│   │   └── input-component/
│   │   └── modal-component/
│   │
│   ├── layouts/                 
│   │   ├── public-layout/          # Layout para páginas públicas (Login/Register)
│   │   ├── private-layout/         # Layout para páginas autenticadas
│   │   └── sidebar/                # Componente de navegação lateral
│   │
│   ├── pages/                      # Páginas da aplicação
│   │   ├── login-client-page/      
│   │   ├── register-client-page/   
│   │   ├── home-page/              
│   │   │   └── components/
|   |   |       └── modal-create-called-component/
│   │   └── profile-page/           
│   │
│   ├── services/                   # Serviços e API calls
│   │   └── auth/
│   │       ├── auth-services.ts    
│   │       └── auth-services.spec.ts
│   │
│   ├── app.ts                      
│   ├── app.html                    
│   ├── app.css                     
│   ├── app.routes.ts               
│   ├── app.config.ts               
│   └── app.spec.ts                 
│
├── index.html                     
├── main.ts                         
├── styles.css                      
│
└── public/                         
    └── assets/                     # Imagens, ícones, etc.
```

---

## 📄 Páginas

### **LoginClientPage** (`/login`)
Página de autenticação onde usuários fazem login com email e senha.

**Funcionalidades:**
- Validação de campos vazios
- Integração com serviço de autenticação
- Armazenamento de token JWT no localStorage
- Redirecionamento para home após login

### **RegisterClientPage** (`/register`)
Página de registro para novos usuários.

**Funcionalidades:**
- Criação de nova conta
- Validação de dados
- Redirecionamento para login após registro

### **HomePage** (`/home`)
Dashboard principal da aplicação após autenticação.

**Funcionalidades:**
- Visualização de chamados
- Criação de novos chamados
- Gerenciamento de tickets

### **ProfilePage** (`/profile`)
Página de perfil do usuário autenticado.

**Funcionalidades:**
- Visualização de dados do usuário
- Edição de perfil
- Histórico de atividades

---

## 🔐 Serviços

### **AuthServices**
Serviço responsável pela autenticação e comunicação com a API de autenticação.

```typescript
import { AuthServices } from '@app/services/auth/auth-services';

export class MyComponent {
  constructor(private authService: AuthServices) {}

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(response => {
      if (response.status) {
        localStorage.setItem('user', JSON.stringify(response.data));
        // Redirecionar para home
      }
    });
  }
}
```

**Métodos Disponíveis:**

- `login(email: string, password: string)` - Autentica o usuário
- `register(name: string, email: string, password: string, role: string)` - Registra novo usuário

---

## 🛣️ Rotas

A aplicação usa um sistema de rotas com layouts diferentes:

```
PublicLayout (sem autenticação)
├── /login       → LoginClientPage
└── /register    → RegisterClientPage

PrivateLayout (com autenticação)
├── /home        → HomePage
└── /profile     → ProfilePage
```

---

## ✅ Boas Práticas Implementadas

### 1. **Componentes Reutilizáveis**
Componentes genéricos estão em `src/app/components/` e podem ser usados em qualquer página.

### 2. **Componentes Específicos de Página**
Componentes que são usados apenas em uma página devem ficar em `src/app/pages/[page-name]/components/`.

```
pages/home-page/
├── components/
│   ├── custom-table/
│   └── filter-form/
├── home-page.ts
└── home-page.html
```

### 3. **Services Centralizados**
Toda comunicação com a API deve ser feita através de services injetados.

### 4. **Lazy Loading (Futuro)**
Rotas podem ser configuradas com lazy loading para melhor performance:

```typescript
{
  path: 'home',
  loadComponent: () => import('./pages/home-page/home-page')
    .then(m => m.HomePage)
}
```
---

## 🚀 Próximos Passos

- [ ] Criar página de listagem de chamados
- [ ] Implementar página de criação de chamados
- [ ] Adicionar paginação na listagem
- [ ] Implementar filtros avançados
- [ ] Criar componente de notificações
- [ ] Adicionar guards de rotas para proteção
- [ ] Implementar interceptadores HTTP para JWT
- [ ] Melhorar tratamento de erros com toast notifications
- [ ] Adicionar testes E2E com Cypress/Playwright
- [ ] Otimizar performance com lazy loading
- [ ] Implementar dark mode
- [ ] Responsividade completa para mobile

---

## 🧪 Testes

### Executar Testes

```bash
npm test
```

### Estrutura de Testes

Cada componente e serviço deve ter um arquivo `.spec.ts` correspondente:

```
component-name/
├── component-name.ts
├── component-name.html
├── component-name.css
└── component-name.spec.ts  ← Testes aqui
```

---

## 🔗 Integração com Backend

A aplicação se comunica com a API do HelpDesk Backend através de HTTP requests.

**URL Base (Configurável):**
```typescript
// src/app/services/auth/auth-services.ts
private API = "https://localhost:5000/api";
```

**Endpoints Utilizados:**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/auth/login` | Autenticação do usuário |
| POST | `/auth/register` | Registro de novo usuário |
| GET | `/user/{id}` | Obter dados do usuário |
| GET | `/called` | Listar todos os chamados |
| POST | `/called` | Criar novo chamado |

---

## 📚 Recursos Úteis

- [Documentação Angular](https://angular.dev/)
- [Documentação RxJS](https://rxjs.dev/)
- [Documentação Vitest](https://vitest.dev/)

---

## 📝 Padrões de Código

### Nomenclatura

- **Componentes:** `NomeComponentComponent` (ex: `ButtonComponent`)
- **Serviços:** `NomeService` (ex: `AuthService`)
- **Interfaces:** `INomeInterface` ou `NomeInterface` (ex: `IUser` ou `UserDTO`)
- **Páginas:** `NomePageComponent` (ex: `LoginPageComponent`)

### Imports

```typescript
// ✅ Bom
import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from '@app/services/auth/auth-services';

// ❌ Evitar
import * as angular from '@angular/core';
import { * } from '../../services/auth/auth-services';
```
