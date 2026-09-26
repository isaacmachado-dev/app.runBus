import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/use-theme';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ChevronLeft, Moon, Palette } from 'lucide-react-native';
import React, { useState } from 'react';
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

export default function TemaScreen() {
  const theme = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [darkMode, setDarkMode] = useState(false);

  return (
    <View
      style={{ backgroundColor: theme.background }}
      className="flex-1 flex flex-col items-center justify-between"
    >
      {/* Header Superior padronizado */}
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
          {/* Card Principal: Seleção e Prévia de Tema */}
          <View className="bg-[#FFFAE0] rounded-[20px] border border-[#E5DEB8] p-4 shadow-sm">
            {/* Cabeçalho do Card com Botão Voltar */}
            <View className="flex-row items-center gap-3">
              <Pressable
                onPress={() => {
                  if (router.canGoBack()) {
                    router.back();
                  } else {
                    router.replace('/ajustes');
                  }
                }}
                className="p-1 -ml-1 active:opacity-70"
                hitSlop={8}
              >
                <ChevronLeft size={24} color="#191812" />
              </Pressable>

              <View className="flex-row items-center gap-3 flex-1">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Palette size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-base">
                  Tema
                </Text>
              </View>
            </View>

            {/* Linha Divisória */}
            <View className="h-[1px] bg-[#E5DEB8] my-4" />

            {/* Opção Selecionada: Padrão */}
            <View className="w-full bg-[#E5DEB8] rounded-[15px] px-6 py-3.5 justify-center">
              <Text className="text-[#000000] font-semibold text-base">
                Padrão
              </Text>

              <View>5
                
              </View>
            </View>

            {/* Prévia da Paleta de Cores do Tema */}
            <View className="w-[176px] h-[130px] bg-white rounded-[10px] self-center mt-6 relative overflow-hidden shadow-sm items-center justify-center">
              {/* Amostra 1 (Creme claro) */}
              <Image
                source={require('@/assets/images/theme/cookie-1.png')}
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 36,
                  width: 68,
                  height: 62,
                }}
                contentFit="contain"
              />

              {/* Amostra 2 (Azul claro pastel) */}
              <Image
                source={require('@/assets/images/theme/cookie-2.png')}
                style={{
                  position: 'absolute',
                  top: 28,
                  left: 48,
                  width: 68,
                  height: 62,
                }}
                contentFit="contain"
              />

              {/* Amostra 3 (Azul ardósia escuro) */}
              <Image
                source={require('@/assets/images/theme/cookie-3.png')}
                style={{
                  position: 'absolute',
                  top: 44,
                  left: 64,
                  width: 68,
                  height: 62,
                }}
                contentFit="contain"
              />
            </View>
          </View>

          {/* Card Secundário: Modo Escuro */}
          <View className="bg-[#FFFAE0] rounded-[20px] border border-[#E5DEB8] p-4 flex-row items-center justify-between mt-4 shadow-sm">
            <View className="flex-row items-center gap-3">
              <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                <Moon size={18} color="#191812" />
              </View>
              <Text className="text-[#191812] font-semibold text-base">
                Modo Escuro
              </Text>
            </View>

            <ToggleSwitch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}