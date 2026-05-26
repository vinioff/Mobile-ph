import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { T } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: T.mint,
          borderTopColor: T.green,
          borderTopWidth: 2,
          height: 62,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: T.brown,
        tabBarInactiveTintColor: T.brownLight,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '700' },
      }}
    >
      <Tabs.Screen name="index"    options={{ title: 'Início',   tabBarIcon: ({ color, size }) => <MaterialIcons name="home"          size={size} color={color} /> }} />
      <Tabs.Screen name="produtos" options={{ title: 'Produtos', tabBarIcon: ({ color, size }) => <MaterialIcons name="shopping-bag"   size={size} color={color} /> }} />
      <Tabs.Screen name="videos"   options={{ title: 'Vídeos',  tabBarIcon: ({ color, size }) => <MaterialIcons name="play-circle-filled" size={size} color={color} /> }} />
      <Tabs.Screen name="contato"  options={{ title: 'Contato', tabBarIcon: ({ color, size }) => <MaterialIcons name="contact-phone"  size={size} color={color} /> }} />
    </Tabs>
  );
}
