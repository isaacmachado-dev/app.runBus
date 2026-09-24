import { useTheme } from '@/hooks/use-theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image } from 'expo-image';
import "lucide-react-native";
import { ArrowUpRight, Bus, BusFront, CreditCard, MapPin, Waypoints } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { StatCard } from './components/StatCard';

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <View
      style={{ backgroundColor: theme.background }}
      className="flex-1 flex flex-col items-center justify-between"
    >
      <View className="flex flex-row items-center justify-between w-full px-4 py-2 mt-15">
        <View className="flex flex-row items-center justify-between gap-4">
          
          <View className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              source={require('../../assets/images/users/default/default.png')}
              style={{ width: 50, height: 50 }}
              contentFit="fill"
              className="rounded-full"
            />
          </View>
          
          <Text>
            Isaac
          </Text>

        </View>

        <View className="bg-[#CCC6A3] px-4 py-2 rounded-full flex flex-row items-center gap-2">
          
          {/* Icon guarda-chuva */}
          <FontAwesome6 name="umbrella" size={24} color="white" />

          <Text className="text-white">
            21°
          </Text>
          
        </View>
      </View>

      // Fundo brancao
      <View className="bg-white h-full w-full rounded-[40px]">
        <View className="bg-[#B54444] py-5 mt-10 mx-10 rounded-3xl">
          <View className="bg-[#EE9090] mx-5 py-2 rounded-full flex flex-row justify-between items-center p-4 gap-4">
            
            <View className="flex flex-row items-center gap-2">
              <BusFront color="white" />
              <Text className="text-white semibold">Linha 8080</Text>
            </View>

            <View className="flex-1 flex-row items-center gap-2">
              <MapPin color="white" />
              <Text
                numberOfLines={1}
                className="text-white semibold flex-1"
              >Rua MMMMMMKKKKKKKKKKKKKKKKKKK</Text>
            </View>

          </View>
          
          <Text className="text-white font-bold mx-5 mt-20 text-2xl">1 <Text className="font-semibold text-sm text-white/70">min</Text></Text>
          <Text className="text-white font-bold mx-5 text-3xl">SAIA AGORA!</Text>

        </View>

        {/* Cards de Métricas (Caminhada & Destino) */}
        <View className="flex-row gap-3 px-8 w-full mt-4">
          {/* Caminhada: progresso ativo (bege) bem mais grosso e visível, anel preto fino */}
          <StatCard
            icon={<FontAwesome5 name="walking" size={16} color="#191812" />}
            title="Caminhada"
            time={4}
            unit="min"
            distance="1 km"
            progress={0.25}
            chartSize={46}
            trackStrokeWidth={1.5}  // anel preto fino/discreto
            activeStrokeWidth={5}   // arco bege bem mais grosso
          />
          {/* Destino: anel preto fino e quase todo percorrido */}
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

        <View className="flex flex-row items-center gap-2 mt-10 bg-[#FFFAE0] mx-10 py-4 px-2 rounded-2xl">
          
          <Waypoints/>
          
          <Text className="text-[#191812] font-semibold text-sm items-start">
            Configurar jornada
          </Text>

        </View>

        <View className="flex flex-row items-center gap-2 mt-4 bg-[#FFFAE0] mx-10 py-4 px-2 rounded-2xl justify-between">
          
          <CreditCard/>
          
          <Text className="text-[#191812] font-semibold text-sm mr-auto">
            Recarregar bilhete
          </Text>

          <ArrowUpRight />

        </View>

        <View className="mt-10">
          <Text className="text-[#555248] font-semibold text-sm mx-10 uppercase">
            Outras opções de linhas
          </Text>
        </View>

        <View className="mx-10 mt-4 bg-[#FFFAE0] rounded-2xl p-4 border-1 border-[#555248]">
            <View className="flex flex-row gap-2 overflow-hidden">
              <View className="p-2 bg-[#738A99] rounded-md">
                <Text className="text-white">Rua MMMMMMMM</Text>
              </View>
              <View className="p-2 bg-white rounded-md ">
                <Text className="text-black">Rua MMMMMMMM</Text>
              </View>
              <View className="p-2 bg-white rounded-md">
                <Text className="text-black">Rua MMMMMMMM</Text>
              </View>
            </View>

            <View className="mt-5">
              <View className="flex flex-col gap-3 ">
                <View className="flex flex-row space-between items-center gap-2">
                  <Bus />
                  <Text>Linha 8080</Text>
                </View>
                
                <View className="h-[1px] w-full bg-[#555248]/20" />

                <View className="flex flex-row space-between items-center gap-2">
                  <Bus />
                  <Text>Linha 8080</Text>
                </View>
              </View>
            </View>

        </View>

   

      </View>

    </View>
  );
}

