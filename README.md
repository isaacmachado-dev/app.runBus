# app.runBus

> **runBus** é um aplicativo móvel em React Native (Expo SDK 57) projetado para você nunca perder o ônibus, calculando a margem exata entre a aproximação da linha e o seu tempo de caminhada até a parada.

---

## 🚀 Início Rápido

### Pré-requisitos
* **Node.js** >= 18
* **Ruby on Rails** (com o backend da API rodando localmente)
* **Expo CLI** / **Expo Go** no celular físico ou emulador Android/iOS

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npx expo start
```

* Para rodar no Android: pressione `a` no terminal ou `npm run android`
* Para rodar no iOS: pressione `i` no terminal ou `npm run ios`
* Para rodar no navegador: pressione `w` ou `npm run web`

---

## 🌐 Conectando com a API Rails Local

Para que o aplicativo no celular ou emulador consuma sua API Rails local:

1. **Inicie o Rails escutando em todas as interfaces de rede (`0.0.0.0`)**:
   ```bash
   bin/rails s -b 0.0.0.0 -p 3000
   ```
2. **Caso depure via USB no Android**:
   ```bash
   adb reverse tcp:3000 tcp:3000
   ```
3. O app está configurado em [`src/components/Header.tsx`](file:///home/moonlight/New_Projects/apps/runBus/src/components/Header.tsx) para resolver a rota da API automaticamente de acordo com a plataforma (`Android`, `iOS` ou `Web`).

---

## 🌦️ Endpoints Consumidos

### Clima em Tempo Real: `GET /api/v1/weather`
* **Parâmetros de Query:** `lat` (latitude) e `long` (longitude)
* **Exemplo:**
  ```bash
  curl -s "http://127.0.0.1:3000/api/v1/weather?lat=-23.5505&long=-46.6333"
  ```
* **Campos principais retornados:**
  * `current.temperature`: Temperatura em graus Celsius.
  * `current.condition`: Condição climática atual (ex: *"Garoa densa"*).
  * `track_impact.extra_walking_minutes`: Minutos adicionais estimados de caminhada causados por chuva.

---

## 📁 Estrutura do Projeto

```text
src/
├── app/                    # File-based routing com Expo Router
│   ├── _layout.tsx         # Configuração de temas e Safe Area
│   ├── index.tsx           # Tela inicial (Dashboard principal)
│   ├── rotas/              # Rastreamento de rotas e linhas
│   └── ajustes/            # Preferências e configurações do app
├── components/             # Componentes modulares
│   ├── Header.tsx          # Header com avatar, nome e clima dinâmico
│   ├── StatCard.tsx        # Métricas de margem de saída
│   └── ui/                 # Componentes genéricos de UI
└── constants/              # Temas e cores
```

---

## 🛠️ Stack Tecnológica

* **Front-end:** [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/), React Native 0.86, React 19, TypeScript
* **Estilização:** Tailwind CSS v4 / NativeWind
* **Gráficos & Animações:** Victory Native XL, Skia, Reanimated
* **Ícones:** FontAwesome6 (`@expo/vector-icons`), Lucide React Native
* **Back-end:** Ruby on Rails (API Mode) + PostgreSQL
