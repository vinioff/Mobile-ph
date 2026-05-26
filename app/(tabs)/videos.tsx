import { ScrollView, View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useVideoPlayer, VideoView } from 'expo-video';
import { T } from '@/constants/theme';

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = (width - 32) * 0.5625; // 16:9

// Vídeo: "Dinâmica + Atividade | Ministério Infantil | Bíblia para crianças"
const YT_ID_1 = 'zxOxVRafI9I';
// Vídeo: "Como contar histórias bíblicas para crianças" — tema materiais visuais
const YT_ID_2 = 'K7rSIIEEfTw';

// Player nativo — substitua pela URL do seu vídeo se quiser
const SAMPLE_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function VideosScreen() {
  const player = useVideoPlayer(SAMPLE_VIDEO, (p) => { p.loop = false; });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: T.bg }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={{ backgroundColor: T.mint, paddingVertical: 24, paddingHorizontal: 20, alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 26, fontWeight: '900', color: T.brown }}>🎬 Vídeos Inspiradores</Text>
          <Text style={{ fontSize: 13, color: T.brownLight, textAlign: 'center' }}>
            Conteúdo para líderes e professores do ministério infantil
          </Text>
        </View>

        {/* Vídeo 1 */}
        <View style={{ margin: 16 }}>
          <View style={{ backgroundColor: T.green, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14, alignSelf: 'flex-start', marginBottom: 10 }}>
            <Text style={{ color: T.white, fontWeight: '900', fontSize: 13 }}>✨ Dinâmica Bíblica para Crianças</Text>
          </View>
          <View style={{ borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: T.mint }}>
            <YoutubePlayer
              height={VIDEO_HEIGHT}
              width={width - 36}
              videoId={YT_ID_1}
              play={false}
            />
          </View>
          <Text style={{ color: T.brownLight, fontSize: 11, marginTop: 6, textAlign: 'center' }}>
            Toque para reproduzir • Modo paisagem para tela cheia
          </Text>
        </View>

        {/* Vídeo 2 */}
        <View style={{ margin: 16 }}>
          <View style={{ backgroundColor: T.mint, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14, alignSelf: 'flex-start', marginBottom: 10, borderWidth: 1, borderColor: T.green }}>
            <Text style={{ color: T.brown, fontWeight: '900', fontSize: 13 }}>📖 Histórias Bíblicas Visuais</Text>
          </View>
          <View style={{ borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: T.mint }}>
            <YoutubePlayer
              height={VIDEO_HEIGHT}
              width={width - 36}
              videoId={YT_ID_2}
              play={false}
            />
          </View>
        </View>

        <View style={{ height: 1, backgroundColor: T.mint, marginHorizontal: 16, marginVertical: 8 }} />

        {/* Player nativo */}
        <View style={{ margin: 16 }}>
          <Text style={{ color: T.brown, fontSize: 16, fontWeight: '900', marginBottom: 10 }}>
            🎥 Player de Apresentação
          </Text>
          <View style={{ borderRadius: 16, overflow: 'hidden', borderWidth: 2, borderColor: T.green }}>
            <VideoView
              player={player}
              style={{ width: width - 32, height: VIDEO_HEIGHT }}
              allowsFullscreen
              allowsPictureInPicture
              contentFit="contain"
            />
          </View>
          <Text style={{ color: T.brownLight, fontSize: 11, marginTop: 6, textAlign: 'center' }}>
            Use este player para exibir vídeos próprios do ministério
          </Text>
        </View>

        {/* Dicas */}
        <View style={{ margin: 16, backgroundColor: T.mint, borderRadius: 16, padding: 18 }}>
          <Text style={{ fontWeight: '900', color: T.brown, fontSize: 15, marginBottom: 10 }}>
            💡 Dicas para o Ministério Infantil
          </Text>
          {[
            'Use recursos visuais coloridos para prender a atenção',
            'Conte histórias bíblicas de forma dramatizada',
            'Envolva as crianças com dinâmicas e atividades',
            'Repita versículos com música e movimentos',
          ].map((dica) => (
            <View key={dica} style={{ flexDirection: 'row', gap: 8, marginBottom: 8, alignItems: 'flex-start' }}>
              <Text style={{ color: T.green, fontWeight: '900', fontSize: 16 }}>✓</Text>
              <Text style={{ color: T.brownLight, fontSize: 13, flex: 1, lineHeight: 20 }}>{dica}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={{ backgroundColor: T.green, padding: 24, alignItems: 'center', gap: 6, marginTop: 8 }}>
          <Text style={{ color: T.white, fontWeight: '900', fontSize: 18 }}>🌱 Transformando vidas</Text>
          <Text style={{ color: T.white, textAlign: 'center', fontSize: 13, lineHeight: 20 }}>
            Nani Visuais — Materiais bíblicos artesanais feitos com amor
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
