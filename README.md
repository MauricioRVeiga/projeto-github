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

## Tecnologias

- **React Native** 0.72.10
- **Expo** SDK 49
- **TypeScript** 5.5.3
- **React** 18.2.0
