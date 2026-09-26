import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/use-theme';
import { Link } from 'expo-router';
import {
  Accessibility,
  Bell,
  ChevronRight,
  CloudRain,
  FileText,
  Globe,
  Info,
  Palette,
  Ruler
} from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ToggleSwitchProps {
  value: boolean;
  onValueChange: (val: boolean) => void;
}

function ToggleSwitch({ value, onValueChange }: ToggleSwitchProps) {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      className={`w-11 h-6 rounded-full p-0.5 justify-center transition-colors ${
        value ? 'bg-[#738A99]' : 'bg-[#CCC6A3]'
      }`}
    >
      <View
        className={`w-5 h-5 rounded-full bg-white shadow-sm ${
          value ? 'self-end' : 'self-start'
        }`}
      />
    </Pressable>
  );
}

export default function AjustesScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [darkMode, setDarkMode] = useState(false);
  const [weatherAlerts, setWeatherAlerts] = useState(true);
  const [accessibility, setAccessibility] = useState(false);

  return (
    <View
      style={{ backgroundColor: theme.background }}
      className="flex-1 flex flex-col items-center justify-between"
    >
      {/* Header Superior padronizado com HomeScreen e RotasScreen */}
      <Header />

      {/* Conteúdo Principal com Fundo Branco arredondado */}
      <View className="bg-white flex-1 w-full rounded-[40px] overflow-hidden">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 28,
            paddingBottom: insets.bottom + 85,
          }}
        >
          {/* Seção 1: Configurações do App */}
          <Text className="text-[#555248] font-bold text-xs tracking-wider uppercase mb-3 px-1">
            Configurações do App
          </Text>

          {/* Card de Configurações */}
          <View className="bg-[#FFFAE0] rounded-[24px] border border-[#CCC6A3]/60 p-4 shadow-sm">
            {/* Idioma */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Globe size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Idioma
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <Text className="text-[#555248] font-medium text-xs">
                  Português (BR)
                </Text>
                <ChevronRight size={18} color="#555248" />
              </View>
            </Pressable>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            {/* Unidade de Distância */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Ruler size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Unidade de Distância
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <Text className="text-[#555248] font-medium text-xs">km</Text>
                <ChevronRight size={18} color="#555248" />
              </View>
            </Pressable>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            {/* Preferências de Notificação */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Bell size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Preferências de Notificação
                </Text>
              </View>

              <ChevronRight size={18} color="#555248" />
            </Pressable>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />
          
            {/* Preferências de Tema */}
            <Link href="/ajustes/tema" asChild>
              <Pressable className="flex-row items-center justify-between py-2">
                <View className="flex-row items-center gap-3">
                  <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                    <Palette size={18} color="#191812" />
                  </View>
                  <Text className="text-[#191812] font-semibold text-sm">
                    Tema
                  </Text>
                </View>

                <ChevronRight size={18} color="#555248" />
              </Pressable>
            </Link>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            {/* Alertas de Clima */}
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <CloudRain size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Alertas de Clima
                </Text>
              </View>

              <ToggleSwitch
                value={weatherAlerts}
                onValueChange={setWeatherAlerts}
              />
            </View>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            {/* Acessibilidade */}
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Accessibility size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Acessibilidade
                </Text>
              </View>

              <ToggleSwitch
                value={accessibility}
                onValueChange={setAccessibility}
              />
            </View>
          </View>

          {/* Seção 2: Sobre */}
          <Text className="text-[#555248] font-bold text-xs tracking-wider uppercase mt-8 mb-3 px-1">
            Sobre
          </Text>

          {/* Card Sobre */}
          <View className="bg-[#FFFAE0] rounded-[24px] border border-[#CCC6A3]/60 p-4 shadow-sm mb-6">
            {/* Versão do App */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Info size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Versão do App
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <Text className="text-[#555248] font-medium text-xs">
                  v1.0.0
                </Text>
                <ChevronRight size={18} color="#555248" />
              </View>
            </Pressable>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            {/* Termos de Uso e Políticas */}
            <Pressable className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <FileText size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-sm">
                  Termos de Uso e Políticas
                </Text>
              </View>

              <ChevronRight size={18} color="#555248" />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
