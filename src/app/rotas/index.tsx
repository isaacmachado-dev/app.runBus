import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/use-theme';
import {
  AlarmClock,
  Bus,
  BusFront,
  CloudHail,
  GripVertical,
  MapPin,
  MapPinPlus,
  Pin,
  Plus
} from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RotasScreen() {
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
      {/* Header Superior padronizado com HomeScreen */}
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
          {/* Seção 1: Configuração de linhas */}
          <Text className="text-[#555248] font-bold text-xs tracking-wider uppercase mb-3 px-1">
            Configuração de jornada
          </Text>

          {/* Card Principal Bege Claro de Configuração */}
          <View className="bg-[#FFFAE0] rounded-[24px] border border-[#CCC6A3]/60 p-4 shadow-sm">
            {/* Card Superior Azul de Linha Destacada */}
            <View className="bg-[#738A99] rounded-[20px] p-3.5 shadow-sm">
              <View className="bg-white rounded-full px-3.5 py-2 flex-row items-center justify-between">
                <View className="flex-row items-center gap-2">
                  <BusFront size={20} color="#738A99" />
                  <Text className="text-[#738A99] font-semibold text-xs">
                    8080
                  </Text>
                </View>
                <View className="flex-row items-center gap-1.5">
                  <MapPin size={17} color="#738A99" />
                  <Text className="text-[#738A99] font-semibold text-xs">
                    Rua MM
                  </Text>
                </View>
              </View>

              <Text className="text-white font-semibold text-xs mt-3 ml-2">
                Linha destacada
              </Text>
            </View>

            {/* Abas / Filtro de Ruas */}
            <View className="flex-row items-center gap-2 mt-4">
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
                      <Pin size={18} color="#738A99" />
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

          {/* Botão Adicionar Linha */}
          <Pressable className="bg-[#FFFAE0] rounded-[18px] py-3.5 px-4 mt-4 flex-row items-center justify-start gap-3 border border-[#CCC6A3]/60 shadow-sm">
            <View className="w-7 h-7 rounded-full bg-[#E5DEB8] items-center justify-center">
              <MapPinPlus size={16} color="#191812" />
            </View>
            <Text className="text-[#191812] font-bold text-xs">
              Adicionar linha
            </Text>
          </Pressable>

          {/* Seção 2: Fluxo de priorização */}
          <Text className="text-[#555248] font-bold text-xs tracking-wider uppercase mt-8 mb-3 px-1">
            Fluxo de priorização
          </Text>

          {/* Card do Fluxo de priorização */}
          <View className="bg-[#FFFAE0] rounded-[24px] border border-[#CCC6A3]/60 p-4 shadow-sm mb-6">
            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <CloudHail size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-xs">
                  Chuva
                </Text>
              </View>
              <GripVertical size={20} color="#738A99" />
            </View>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <Pin size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-xs">
                  Linha destacada
                </Text>
              </View>
              <GripVertical size={20} color="#738A99" />
            </View>

            <View className="h-[1px] bg-[#E5DEB8] my-1.5" />

            <View className="flex-row items-center justify-between py-2">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-[#E5DEB8] items-center justify-center">
                  <AlarmClock size={18} color="#191812" />
                </View>
                <Text className="text-[#191812] font-semibold text-xs">
                  Tempo de chegada
                </Text>
              </View>
              <GripVertical size={20} color="#738A99" />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
