import { useTheme } from '@/hooks/use-theme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

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

      <View className="bg-white h-full w-full rounded-[40px]">
       
      </View>

    </View>
  );
}

