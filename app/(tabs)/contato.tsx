import { useState } from 'react';
import {
  ScrollView, View, Text, TextInput, TouchableOpacity,
  Alert, Image, Platform, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { T } from '@/constants/theme';

const REDES = [
  { icon: 'chat',      label: 'WhatsApp',  cor: '#25D366', url: 'https://api.whatsapp.com/send?phone=+5511972529894&text=Desejo%20fazer%20uma%20encomenda!' },
  { icon: 'photo-camera', label: 'Instagram', cor: '#E1306C', url: 'https://www.instagram.com/casadeoracaoresgate' },
  { icon: 'thumb-up',  label: 'Facebook',  cor: '#1877F2', url: 'https://www.facebook.com/casadeoracaoresgate.com.br' },
];

export default function ContatoScreen() {
  const [nome, setNome]       = useState('');
  const [email, setEmail]     = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sent, setSent]       = useState(false);

  // Câmera — mesma lógica do Vi_Quality
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photoUri, setPhotoUri]     = useState<string | null>(null);
  const [cameraRef, setCameraRef]   = useState<CameraView | null>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const handleOpenCamera = async () => {
    if (Platform.OS === 'web') { Alert.alert('Câmera', 'Disponível apenas no app mobile.'); return; }
    if (!permission?.granted) {
      const r = await requestPermission();
      if (!r.granted) { Alert.alert('Permissão negada', 'Habilite a câmera nas configurações.'); return; }
    }
    setCameraOpen(true);
  };

  const handleCapture = async () => {
    if (!cameraRef) return;
    try {
      const photo = await cameraRef.takePictureAsync({ quality: 0.7 });
      if (photo?.uri) { setPhotoUri(photo.uri); setCameraOpen(false); }
    } catch { Alert.alert('Erro', 'Não foi possível tirar a foto.'); }
  };

  const handleSend = () => {
    if (!nome.trim() || !email.trim()) { Alert.alert('Atenção', 'Preencha nome e e-mail.'); return; }
    setSent(true);
    Alert.alert('Mensagem enviada! 💛', 'Em breve entraremos em contato. Que Deus abençoe!');
  };

  // --- Tela da câmera ---
  if (cameraOpen) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <CameraView ref={(r) => setCameraRef(r)} style={{ flex: 1 }} facing="front" />
        <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setCameraOpen(false)}
            style={{ padding: 14, backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: 50 }}>
            <MaterialIcons name="close" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCapture}
            style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: 'white', borderWidth: 4, borderColor: T.green }} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: T.bg }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={{ backgroundColor: T.mint, paddingVertical: 24, paddingHorizontal: 20, alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 26, fontWeight: '900', color: T.brown }}>💌 Fale Conosco</Text>
          <Text style={{ fontSize: 13, color: T.brownLight, textAlign: 'center' }}>
            Tire dúvidas, faça encomendas e muito mais!
          </Text>
        </View>

        <View style={{ padding: 20, gap: 18 }}>

          {/* Avatar câmera */}
          <TouchableOpacity onPress={handleOpenCamera} style={{ alignItems: 'center' }}>
            <View style={{
              width: 96, height: 96, borderRadius: 48,
              backgroundColor: T.mint, alignItems: 'center', justifyContent: 'center',
              borderWidth: 3, borderColor: T.green, overflow: 'hidden',
            }}>
              {photoUri
                ? <Image source={{ uri: photoUri }} style={{ width: 96, height: 96 }} />
                : <MaterialIcons name="camera-alt" size={40} color={T.green} />}
            </View>
            <Text style={{ color: T.brownLight, fontSize: 11, marginTop: 6 }}>
              {photoUri ? '✅ Foto tirada! Toque para refazer' : 'Toque para tirar foto de perfil'}
            </Text>
          </TouchableOpacity>

          {/* Campos */}
          {[
            { label: 'Nome completo *', value: nome, set: setNome, placeholder: 'Seu nome', keyboard: 'default' as const },
            { label: 'E-mail *',        value: email, set: setEmail, placeholder: 'seuemail@email.com', keyboard: 'email-address' as const },
          ].map(({ label, value, set, placeholder, keyboard }) => (
            <View key={label}>
              <Text style={{ color: T.brown, fontWeight: '700', marginBottom: 6, fontSize: 13 }}>{label}</Text>
              <TextInput
                value={value} onChangeText={set} placeholder={placeholder}
                placeholderTextColor={T.brownLight} keyboardType={keyboard} autoCapitalize="none"
                style={{
                  backgroundColor: T.card, borderRadius: 12, paddingHorizontal: 16,
                  paddingVertical: 13, color: T.brown, fontSize: 15,
                  borderWidth: 1.5, borderColor: value ? T.green : T.mint,
                }}
              />
            </View>
          ))}

          {/* Mensagem */}
          <View>
            <Text style={{ color: T.brown, fontWeight: '700', marginBottom: 6, fontSize: 13 }}>Mensagem</Text>
            <TextInput
              value={mensagem} onChangeText={setMensagem}
              placeholder="Como podemos ajudar? 🙏"
              placeholderTextColor={T.brownLight}
              multiline numberOfLines={4} textAlignVertical="top"
              style={{
                backgroundColor: T.card, borderRadius: 12, paddingHorizontal: 16,
                paddingVertical: 13, color: T.brown, fontSize: 15,
                borderWidth: 1.5, borderColor: mensagem ? T.green : T.mint, minHeight: 100,
              }}
            />
          </View>

          {/* Botão enviar */}
          <TouchableOpacity onPress={handleSend} activeOpacity={0.8}
            style={{
              backgroundColor: sent ? '#16a34a' : T.green,
              borderRadius: 50, paddingVertical: 16,
              flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
            <MaterialIcons name={sent ? 'check' : 'send'} size={22} color="white" />
            <Text style={{ color: 'white', fontWeight: '900', fontSize: 16 }}>
              {sent ? 'Mensagem Enviada! 💛' : 'Enviar Mensagem'}
            </Text>
          </TouchableOpacity>

          {/* Redes Sociais */}
          <Text style={{ color: T.brown, fontWeight: '900', fontSize: 16, textAlign: 'center', marginTop: 8 }}>
            Nos encontre também em:
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 14 }}>
            {REDES.map((r) => (
              <TouchableOpacity key={r.label} onPress={() => Linking.openURL(r.url)} activeOpacity={0.8}
                style={{
                  backgroundColor: r.cor, borderRadius: 16, paddingVertical: 12,
                  paddingHorizontal: 18, alignItems: 'center', gap: 4, flex: 1,
                }}>
                <MaterialIcons name={r.icon as any} size={26} color="white" />
                <Text style={{ color: 'white', fontSize: 11, fontWeight: '700' }}>{r.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Entrega */}
          <View style={{ backgroundColor: T.mint, borderRadius: 16, padding: 18, gap: 10 }}>
            <Text style={{ fontWeight: '900', color: T.brown, fontSize: 15 }}>🚚 Entrega e Prazo</Text>
            {[
              { icon: '📦', texto: 'Entregamos com parceiros confiáveis em todo o Brasil' },
              { icon: '⏰', texto: 'Prazo estimado: 5 dias úteis (pode variar por localidade)' },
              { icon: '📍', texto: 'Verifique se seu endereço está dentro da nossa área' },
            ].map(({ icon, texto }) => (
              <View key={texto} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 18 }}>{icon}</Text>
                <Text style={{ color: T.brownLight, fontSize: 13, flex: 1, lineHeight: 20 }}>{texto}</Text>
              </View>
            ))}
          </View>

        </View>

        {/* Footer */}
        <View style={{ backgroundColor: T.green, padding: 24, alignItems: 'center', gap: 4 }}>
          <Text style={{ color: T.white, fontWeight: '900', fontSize: 16 }}>🌟 Nani Visuais</Text>
          <Text style={{ color: T.white, fontSize: 12, textAlign: 'center' }}>
            Materiais bíblicos artesanais feitos com amor desde 2022
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
