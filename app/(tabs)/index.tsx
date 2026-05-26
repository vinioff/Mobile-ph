import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { T } from '@/constants/theme';

const DIFERENCIAIS = [
  { icon: '✋', titulo: 'Feito à Mão', desc: 'Cada peça produzida com cuidado e carinho artesanal.' },
  { icon: '📖', titulo: 'Baseado na Bíblia', desc: 'Conteúdo 100% bíblico, fiel e de alta qualidade.' },
  { icon: '🌱', titulo: 'Transforma Vidas', desc: 'Plantamos sementes de fé desde a infância.' },
  { icon: '🎨', titulo: 'Visual e Criativo', desc: 'Materiais coloridos que prendem a atenção das crianças.' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: T.bg }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={{ backgroundColor: T.mint, paddingVertical: 30, paddingHorizontal: 24, alignItems: 'center', gap: 6 }}>
          <Text style={{ fontSize: 34, fontWeight: '900', color: T.brown, letterSpacing: 1 }}>🌟 Nani Visuais</Text>
          <Text style={{ fontSize: 14, color: T.brownLight, textAlign: 'center' }}>
            Ministério Infantil • Materiais Bíblicos Artesanais
          </Text>
        </View>

        {/* Hero */}
        <View style={{
          backgroundColor: T.mint, margin: 16, borderRadius: 20, padding: 22,
          borderLeftWidth: 5, borderLeftColor: T.green,
        }}>
          <Text style={{ fontSize: 22, fontWeight: '900', color: T.brown, lineHeight: 32, marginBottom: 10 }}>
            Materiais e decorações que ensinam, encantam e transformam vidas desde a infância.
          </Text>
          <Text style={{ fontSize: 14, color: T.brownLight, lineHeight: 22 }}>
            Acreditamos que o ensino bíblico na infância é uma semente poderosa para toda a vida.
            Cada peça é feita à mão para tornar o aprendizado divertido, visual e transformador.
          </Text>
        </View>

        {/* Diferenciais */}
        <View style={{ paddingHorizontal: 16, gap: 10, marginBottom: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '900', color: T.brown, marginBottom: 4 }}>
            Por que escolher a Nani Visuais?
          </Text>
          {DIFERENCIAIS.map((d) => (
            <View key={d.titulo} style={{
              backgroundColor: T.card, borderRadius: 14, padding: 16,
              flexDirection: 'row', alignItems: 'center', gap: 14,
              borderWidth: 1.5, borderColor: T.mint,
              shadowColor: T.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, elevation: 2,
            }}>
              <Text style={{ fontSize: 30 }}>{d.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '800', color: T.brown, fontSize: 14 }}>{d.titulo}</Text>
                <Text style={{ color: T.brownLight, fontSize: 12, marginTop: 2 }}>{d.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sobre */}
        <View style={{ backgroundColor: T.green, margin: 16, borderRadius: 20, padding: 22 }}>
          <Text style={{ fontSize: 18, fontWeight: '900', color: T.white, marginBottom: 10 }}>
            Nossa História 💛
          </Text>
          <Text style={{ color: T.white, fontSize: 13, lineHeight: 22 }}>
            Tudo começou em 2022 com a organização do ministério infantil. A Igreja não tinha separação das crianças pequenas, juniores e adolescentes.{'\n\n'}
            Criamos materiais visuais com as histórias da Bíblia — de forma entendível para os menores. Com o tempo, outras igrejas vieram pedir os materiais e assim nasceu a <Text style={{ fontWeight: '900' }}>Nani Visuais</Text>!
          </Text>
        </View>

        {/* CTA WhatsApp */}
        <TouchableOpacity
          onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+5511972529894&text=Desejo%20fazer%20uma%20encomenda!')}
          activeOpacity={0.8}
          style={{
            backgroundColor: '#25D366', marginHorizontal: 16, marginBottom: 24,
            borderRadius: 50, paddingVertical: 16,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
        >
          <MaterialIcons name="chat" size={24} color="white" />
          <Text style={{ color: 'white', fontWeight: '900', fontSize: 16 }}>Fazer Encomenda pelo WhatsApp</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
