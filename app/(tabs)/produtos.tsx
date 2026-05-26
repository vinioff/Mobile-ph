import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { T } from '@/constants/theme';

type Produto = { id: string; nome: string; desc: string; preco: string; emoji: string; destaque?: boolean };

const PRODUTOS: Produto[] = [
  {
    id: '1', emoji: '📖', nome: 'Bibliona', preco: 'R$ 150,00', destaque: true,
    desc: 'Bíblia gigante visual para contação de histórias. Perfeita para prender a atenção das crianças durante as aulas bíblicas.',
  },
  {
    id: '2', emoji: '🏅', nome: 'Banner Seja Forte e Corajoso', preco: 'R$ 200,00', destaque: true,
    desc: 'Banner decorativo baseado em Josué 1:9. Ideal para decorar a sala do ministério infantil e inspirar as crianças.',
  },
  {
    id: '3', emoji: '🧸', nome: 'Bonecos Bíblicos', preco: 'R$ 30,00',
    desc: 'Bonecos artesanais de personagens bíblicos. Ótimos para dramatizações e contação de histórias interativas.',
  },
  {
    id: '4', emoji: '🏰', nome: 'Castelo no Paraíso', preco: 'R$ 250,00',
    desc: 'Material visual do Castelo no Paraíso — recurso didático completo para ensinar sobre a morada de Deus de forma lúdica.',
  },
];

export default function ProdutosScreen() {
  const [selected, setSelected] = useState<Produto | null>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: T.bg }}>

      {/* Header */}
      <View style={{ backgroundColor: T.mint, paddingVertical: 24, paddingHorizontal: 20, alignItems: 'center', gap: 4 }}>
        <Text style={{ fontSize: 26, fontWeight: '900', color: T.brown }}>🛍️ Produtos em Destaque</Text>
        <Text style={{ fontSize: 13, color: T.brownLight, textAlign: 'center' }}>
          Materiais artesanais feitos com amor e excelência
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, gap: 14 }}>
        {PRODUTOS.map((p) => (
          <TouchableOpacity
            key={p.id} onPress={() => setSelected(p)} activeOpacity={0.85}
            style={{
              backgroundColor: T.card, borderRadius: 18, padding: 18,
              flexDirection: 'row', alignItems: 'center', gap: 16,
              borderWidth: p.destaque ? 2 : 1,
              borderColor: p.destaque ? T.green : T.mint,
              shadowColor: T.shadow, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, elevation: 3,
            }}
          >
            <View style={{
              width: 64, height: 64, borderRadius: 32,
              backgroundColor: T.bg, alignItems: 'center', justifyContent: 'center',
            }}>
              <Text style={{ fontSize: 34 }}>{p.emoji}</Text>
            </View>
            <View style={{ flex: 1 }}>
              {p.destaque && (
                <View style={{ backgroundColor: T.green, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 2, alignSelf: 'flex-start', marginBottom: 4 }}>
                  <Text style={{ color: T.white, fontSize: 10, fontWeight: '700' }}>DESTAQUE</Text>
                </View>
              )}
              <Text style={{ fontWeight: '900', color: T.brown, fontSize: 15 }}>{p.nome}</Text>
              <Text style={{ color: T.brownLight, fontSize: 12, marginTop: 3, lineHeight: 17 }} numberOfLines={2}>{p.desc}</Text>
              <Text style={{ color: T.green, fontWeight: '900', fontSize: 17, marginTop: 6 }}>{p.preco}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color={T.green} />
          </TouchableOpacity>
        ))}

        {/* Banner entrega */}
        <View style={{ backgroundColor: T.mint, borderRadius: 16, padding: 18, marginTop: 4, gap: 8 }}>
          <Text style={{ fontWeight: '900', color: T.brown, fontSize: 15 }}>🚚 Informações de Entrega</Text>
          <Text style={{ color: T.brownLight, fontSize: 13, lineHeight: 20 }}>
            • Entregamos em todo o Brasil{'\n'}
            • Prazo estimado: 5 dias úteis{'\n'}
            • Parceiros de entrega confiáveis{'\n'}
            • Verifique sua área antes de pedir
          </Text>
        </View>
      </ScrollView>

      {/* Modal detalhe */}
      <Modal visible={!!selected} transparent animationType="fade" onRequestClose={() => setSelected(null)}>
        <View style={{ flex: 1, backgroundColor: 'rgba(74,55,40,0.6)', justifyContent: 'center', padding: 24 }}>
          <View style={{ backgroundColor: T.card, borderRadius: 24, padding: 28, alignItems: 'center', borderWidth: 2, borderColor: T.green }}>
            <Text style={{ fontSize: 64, marginBottom: 8 }}>{selected?.emoji}</Text>
            <Text style={{ color: T.brown, fontSize: 20, fontWeight: '900', textAlign: 'center' }}>{selected?.nome}</Text>
            <Text style={{ color: T.brownLight, textAlign: 'center', marginVertical: 14, lineHeight: 22, fontSize: 14 }}>{selected?.desc}</Text>
            <Text style={{ color: T.green, fontSize: 26, fontWeight: '900', marginBottom: 20 }}>{selected?.preco}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelected(null);
                Linking.openURL(`https://api.whatsapp.com/send?phone=+5511972529894&text=Olá! Tenho interesse no produto: ${selected?.nome}`);
              }}
              style={{ backgroundColor: '#25D366', borderRadius: 50, paddingVertical: 13, paddingHorizontal: 28, flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 }}
            >
              <MaterialIcons name="chat" size={20} color="white" />
              <Text style={{ color: 'white', fontWeight: '900', fontSize: 15 }}>Pedir pelo WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelected(null)}>
              <Text style={{ color: T.brownLight, fontSize: 13, marginTop: 4 }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
