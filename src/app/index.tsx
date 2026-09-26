import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/use-theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';
import {
  ArrowUpRight,
  Bus,
  BusFront,
  CreditCard,
  MapPin,
  Plus,
  Waypoints
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatCard } from '@/components/StatCard';

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [selectedStreet, setSelectedStreet] = useState(0);

  const streets = ['Rua MM MM MM', 'Rua MM MM MM'];

  const busLines = [
    { id: '1', name: 'Linha 8080', isPinned: true },
    { id: '2', name: 'Linha 8081', isPinned: true },
    { id: '3', name: 'Linha 8082', isPinned: true },
  ];

  return (
    <View
      style={{ backgroundColor: theme.background }}
      className="flex-1 flex flex-col items-center justify-between"
    >
      {/* Header Superior Padronizado */}
      <Header />

      {/* Conteúdo Principal com Fundo Branco arredondado e rolagem */}
      <View className="bg-white flex-1 w-full rounded-[40px] overflow-hidden">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 28,
            paddingBottom: insets.bottom + 85,
          }}
        >
          {/* Card Vermelho de Alerta da Linha */}
          <View className="bg-[#B54444] py-5 rounded-3xl">
            <View className="bg-[#EE9090] mx-5 py-2 rounded-full flex flex-row justify-between items-center p-4 gap-4">
              <View className="flex flex-row items-center gap-2">
                <BusFront color="white" />
                <Text className="text-white font-semibold">Linha 8080</Text>
              </View>

              <View className="flex-1 flex-row items-center gap-2">
                <MapPin color="white" />
                <Text
                  numberOfLines={1}
                  className="text-white font-semibold flex-1"
                >
                  Rua MMMMMMKKKKKKKKKKKKKKKKKKK
                </Text>
              </View>
            </View>

            <Text className="text-white font-bold mx-5 mt-16 text-2xl">
              1 <Text className="font-semibold text-sm text-white/70">min</Text>
            </Text>
            <Text className="text-white font-bold mx-5 text-3xl">
              SAIA AGORA!
            </Text>
          </View>

          {/* Cards de Métricas (Caminhada & Destino) */}
          <View className="flex-row gap-3 w-full mt-4">
            <StatCard
              icon={<FontAwesome5 name="walking" size={16} color="#191812" />}
              title="Caminhada"
              time={4}
              unit="min"
              distance="1 km"
              progress={0.25}
              chartSize={46}
              trackStrokeWidth={1.5}
              activeStrokeWidth={5}
            />
            <StatCard
              icon={<MapPin size={16} color="#191812" />}
              title="Destino"
              time={50}
              unit="min"
              distance="10 km"
              progress={0.92}
              chartSize={46}
              trackStrokeWidth={1.5}
              activeStrokeWidth={5}
            />
          </View>

          {/* Botão Configurar jornada */}
          <Link href="/rotas" asChild>
            <Pressable className="bg-[#FFFAE0] rounded-[18px] py-3.5 px-4 mt-4 flex-row items-center justify-start gap-3 border border-[#CCC6A3]/60 shadow-sm">
              <View className="w-7 h-7 rounded-full bg-[#E5DEB8] items-center justify-center">
                <Waypoints size={16} color="#191812" />
              </View>
              <Text className="text-[#191812] font-bold text-xs">
                Configurar jornada
              </Text>
            </Pressable>
          </Link>

          {/* Botão Recarregar bilhete */}
          <Pressable className="bg-[#FFFAE0] rounded-[18px] py-3.5 px-4 mt-4 flex-row items-center justify-between gap-3 border border-[#CCC6A3]/60 shadow-sm">
            <View className="w-7 h-7 rounded-full bg-[#E5DEB8] items-center justify-center">
              <CreditCard size={16} color="#191812" />
            </View>
            <Text className="text-[#191812] font-bold text-xs mr-auto">
              Recarregar bilhete
            </Text>
            <ArrowUpRight size={18} color="#191812" />
          </Pressable>

          {/* Seção Outras opções de linhas */}
          <Text className="text-[#555248] font-bold text-xs tracking-wider uppercase mt-8 mb-3 px-1">
            Outras opções de linhas
          </Text>

          {/* Card Principal Bege Claro de Configuração de Linhas */}
          <View className="bg-[#FFFAE0] rounded-[24px] border border-[#CCC6A3]/60 p-4 shadow-sm mb-6">
            {/* Abas / Filtro de Ruas */}
            <View className="flex-row items-center gap-2">
              {streets.map((street, index) => {
                const isActive = selectedStreet === index;
                return (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedStreet(index)}
                    className={`px-3 py-1.5 rounded-lg border ${
                      isActive
                        ? 'bg-[#738A99] border-[#738A99]'
                        : 'bg-white border-white'
                    }`}
                  >
                    <Text
                      className={`text-xs ${
                        isActive
                          ? 'text-white font-semibold'
                          : 'text-[#191812] font-normal'
                      }`}
                    >
                      {street}
                    </Text>
                  </Pressable>
                );
              })}

              {/* Botão de Adicionar Rua (+) */}
              <Pressable className="w-8 h-7 bg-white rounded-lg items-center justify-center border border-white">
                <Plus size={14} color="#738A99" />
              </Pressable>
            </View>

            {/* Lista de Linhas */}
            <View className="bg-[#FFFAE0] rounded-2xl mt-4 pt-1">
              {busLines.map((line, index) => (
                <React.Fragment key={line.id}>
                  <View className="flex-row items-center justify-between py-2.5">
                    <View className="flex-row items-center gap-3">
                      <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                        <Bus size={18} color="#191812" />
                      </View>
                      <Text className="text-[#191812] font-semibold text-xs">
                        {line.name}
                      </Text>
                    </View>

                    <Pressable hitSlop={8}>
                      <Text>
                        2 min
                      </Text>
                    </Pressable>
                  </View>

                  {index < busLines.length - 1 && (
                    <View className="h-[1px] bg-[#E5DEB8] my-1" />
                  )}
                </React.Fragment>
              ))}
            </View>

            {/* Contador / Indicador de linhas */}
            <View className="items-end mt-2">
              <Text className="text-[#CCC6A3] font-bold text-xs">4/5</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
