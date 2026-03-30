# projeto-github

Aplicativo móvel em React Native + TypeScript com tela de perfil completa e robusta, inspirada no GitHub.

## Recursos implementados

### Interface (UI)

- **Header com avatar e informações principais**
- **Status badge** (emoji + mensagem personalizada)
- **Biografia** do usuário
- **Informações de perfil**: localização, empresa, website, Twitter (com links clicáveis)
- **Estatísticas**: repositórios, seguidores, seguindo
- **Seção de organizações** com avatares
- **Cards de repositórios fixados** com:
  - Badge de privacidade
  - Indicador de linguagem com cores reais
  - Estatísticas de stars e forks
  - Data da última atualização
- **Seção de contribuições** com estatísticas anuais

### Tipagem (TypeScript)

- Interfaces robustas para `UserProfile` e `Repository`
- Tipagem completa de todos os componentes
- Dados mock estruturados com TypeScript

### Estilização

- Tema dark completo inspirado no GitHub
- `StyleSheet` organizado e reutilizável
- Layout responsivo com `SafeAreaView` e `ScrollView`
- Bordas arredondadas, espaçamentos consistentes
- Cores autênticas do GitHub (#0d1117, #161b22, #30363d, etc.)

## Como rodar

1. **Instale dependências:**

   ```bash
   npm install
   ```

2. **Inicie o Expo:**

   ```bash
   npx expo start
   ```

3. **Rode no emulador ou dispositivo físico** via QR Code no Expo Go.

## Estrutura de arquivos

```
src/
├── components/
│   ├── RepoCard.tsx       # Card de repositório com detalhes completos
│   ├── StatusBadge.tsx    # Badge de status do usuário
│   ├── ProfileInfo.tsx    # Informações adicionais (localização, links)
│   ├── Organizations.tsx  # Seção de organizações
│   └── Contributions.tsx  # Estatísticas de contribuições
├── data/
│   └── user.ts            # Dados mock do perfil
└── types.ts               # Definições TypeScript
```

## Personalização

Para personalizar o perfil, edite o arquivo `src/data/user.ts`:

- **Foto**: altere `avatarUrl`
- **Informações**: nome, username, bio, localização, etc.
- **Status**: emoji e mensagem personalizada
- **Repositórios**: array de repositórios fixados
- **Organizações**: lista de organizações

## Testando no iPhone

### Pré-requisitos

- iPhone com **Expo Go** instalado (App Store)
- PC e iPhone na **mesma rede Wi-Fi**
- Firewall do Windows permitindo a porta (porta padrão: 8081)

### Passo a passo

1. **Inicie o servidor Expo** no terminal:

   ```bash
   npx expo start
   ```

2. **Selecione o modo LAN**:
   - Pressione a tecla `l` no terminal
   - Ou altere automaticamente com: `npx expo start --lan`

3. **Procure pela URL correta**:
   - Deve aparecer: `exp://192.168.x.x:8081` (IP local)
   - **NÃO use**: `exp://127.0.0.1:8081` (localhost não funciona no celular)

4. **No iPhone**:
   - Abra o **Expo Go**
   - **Escaneie o QR Code** com câmera ou Expo Go
   - Ou **digite manualmente**: `exp://[seu-ip]:8081`

### Troubleshooting

#### Erro: "Could not connect to the server"

- ✅ Verifique se estão na **mesma rede Wi-Fi**
- ✅ Confirme que o terminal mostra `exp://192.168` (não `127.0.0.1`)
- ✅ Pressione `l` no terminal para ativar **mode LAN**

#### Firewall bloqueando conexão

Execute no PowerShell como **Administrador**:

```powershell
New-NetFirewallRule -DisplayName "Expo Dev" -Direction Inbound -Protocol TCP -LocalPort 8081 -Action Allow
```

#### Porta em uso

Se a porta 8081 estiver ocupada, o Expo usa automaticamente 8082, 8083, etc. Procure pela mensagem no terminal.

#### Limpar cache

```bash
rm -r .expo
npx expo start --clear
```


### Estrutura do projeto

```
projeto-github/
├── App.tsx                    # Componente principal
├── app.json                   # Configuração Expo
├── babel.config.js            # Configuração Babel
├── package.json               # Dependências
├── tsconfig.json              # Configuração TypeScript
├── README.md                  # Este arquivo
└── src/
    ├── components/            # Componentes reutilizáveis
    │   ├── RepoCard.tsx       # Card de repositório
    │   ├── StatusBadge.tsx    # Badge de status
    │   ├── ProfileInfo.tsx    # Informações do perfil
    │   ├── Organizations.tsx  # Seção de organizações
    │   └── Contributions.tsx  # Estatísticas de contribuições
    ├── data/
    │   └── user.ts            # Dados mock do perfil
    └── types.ts               # Definições TypeScript (UserProfile, Repository)
```

### Adicionar novos repositórios

Edite `src/data/user.ts` e adicione ao array `pinnedRepos`:

```typescript
{
  id: '4',
  name: 'seu-repo',
  description: 'Descrição do repositório',
  language: 'TypeScript',
  stars: 10,
  forks: 2,
  updatedAt: '2026-03-25',
}
```

### Alterar dados do perfil

Todos os dados editáveis estão em `src/data/user.ts`:

- `avatarUrl`: URL da foto de perfil
- `name`: Nome completo
- `username`: Username do GitHub
- `bio`: Biografia
- `location`, `company`, `website`, `twitter`: Links e informações
- `status`: Emoji e mensagem de status
- `contributions`: Estatísticas anuais
- `organizations`: Lista de organizações

## Dependências principais

| Pacote       | Versão  | Descrição                              |
| ------------ | ------- | -------------------------------------- |
| React Native | 0.72.10 | Framework mobile                       |
| Expo         | SDK 49  | Plataforma para desenvolvimento mobile |
| TypeScript   | 5.5.3   | Tipagem estática                       |
| React        | 18.2.0  | Biblioteca UI                          |

## Comandos úteis

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npx expo start

# Rodar em modo LAN (rede local)
npx expo start --lan

# Limpar cache e recompilar
npx expo start --clear

# Build para produção
npx expo build:ios    # Requer conta Expo
```

## Licença

Este projeto é um trabalho acadêmico para a disciplina **PDMII ATV1**.

## Autor

**Maurício R. Veiga**  
GitHub: [@MauricioRVeiga](https://github.com/MauricioRVeiga)

---

**Projeto completo e pronto para avaliação!** ✅
