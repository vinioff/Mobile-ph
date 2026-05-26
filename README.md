# 🌟 Nani Visuais — App Mobile

App do ministério **Nani Visuais** — materiais didáticos bíblicos artesanais para ministério infantil.

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- [Expo Go](https://expo.dev/go) instalado no celular

---

## 🚀 Como executar

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/nani-visuais-app.git
cd nani-visuais-app
```


### 2. Instale as dependências
```bash
npm install
npx expo install react-native-webview
npx expo install react-native-youtube-iframe
npx expo install babel-preset-expo
```

### 3. Inicie
```bash
npx expo start
```

### 4 M. Abra no celular
Escaneie o QR code com o **Expo Go**. Celular e PC na mesma rede Wi-Fi.

---

## 📱 Telas

| Tab | Conteúdo |
|---|---|
| **Início** | Hero, diferenciais, história da Nani Visuais, CTA WhatsApp |
| **Produtos** | 4 produtos com modal de detalhes e link direto pro WhatsApp |
| **Vídeos** | 2 vídeos do YouTube sobre ministério infantil + player nativo |
| **Contato** | Formulário, câmera de perfil, redes sociais e info de entrega |

---

## 🎨 Tema

| Cor | Hex | Uso |
|---|---|---|
| Creme | `#f2ebd8` | Fundo |
| Verde-menta | `#c5e0dc` | Header / Cards |
| Verde-oliva | `#bbcd77` | Destaques / Badges |
| Marrom | `#4a3728` | Texto principal |

---

## 🛠️ Stack

| Tecnologia | Versão |
|---|---|
| Expo SDK | 54 |
| expo-router | ~6.0.19 |
| expo-camera | ~17.0.10 |
| expo-video | ~3.0.15 |
| react-native-youtube-iframe | ^2.3.0 |
| react-native-webview | ^13.x |

---

## 📷 Câmera
Na aba **Contato**, toque no avatar para tirar foto de perfil.  
Se negou a permissão: **Configurações → Apps → Expo Go → Permissões → Câmera → Permitir**

---

## ⚠️ Problemas comuns

**`explore.tsx` dando erro** → delete o arquivo (passo 3 acima)

**App não abre no Expo Go** → mesma rede Wi-Fi que o PC

**Vídeo não carrega** → verifique conexão com internet
