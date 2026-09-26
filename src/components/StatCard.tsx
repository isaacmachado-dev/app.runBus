import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import React from 'react';
import { Text, View } from 'react-native';

interface ProgressCircleProps {
  progress: number; // 0 a 1 (ex: 0.25 para 25%)
  size?: number;
  trackStrokeWidth?: number;  // Espessura do anel preto (fundo/trilha)
  activeStrokeWidth?: number; // Espessura do arco bege/estilizado (progresso ativo)
  activeColor?: string;
  trackColor?: string;
}

export function ProgressCircle({
  progress,
  size = 46,
  trackStrokeWidth = 1.5,  // Anel preto mais fino e discreto
  activeStrokeWidth = 5,   // Arco ativo mais encorpado e grosso
  activeColor = '#E5DEB8',
  trackColor = '#191812',
}: ProgressCircleProps) {
  const center = size / 2;
  const maxStroke = Math.max(trackStrokeWidth, activeStrokeWidth);
  const radius = (size - maxStroke) / 2;

  // 1. Caminho da trilha completa (círculo preto de base)
  const trackPath = React.useMemo(() => {
    const p = Skia.Path.Make();
    p.addCircle(center, center, radius);
    return p;
  }, [center, radius]);

  // 2. Caminho do arco estilizado (progresso ativo com início no topo)
  const activePath = React.useMemo(() => {
    const clamped = Math.max(0.001, Math.min(0.999, progress));
    const sweepAngle = clamped * 360;
    const p = Skia.Path.Make();
    const oval = Skia.XYWHRect(center - radius, center - radius, radius * 2, radius * 2);
    // Início em -90 graus (topo / 12 horas)
    p.arcToOval(oval, -90, sweepAngle, false);
    return p;
  }, [center, radius, progress]);

  return (
    <View style={{ width: size, height: size }}>
      <Canvas style={{ width: size, height: size }}>
        {/* Anel preto mais fino de base */}
        <Path
          path={trackPath}
          color={trackColor}
          style="stroke"
          strokeWidth={trackStrokeWidth}
        />
        {/* Arco estilizado (ativo) com maior grossura */}
        <Path
          path={activePath}
          color={activeColor}
          style="stroke"
          strokeWidth={activeStrokeWidth}
          strokeCap="round"
        />
      </Canvas>
    </View>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  time: number | string;
  unit?: string;
  distance: string;
  progress: number;
  chartSize?: number;
  trackStrokeWidth?: number;
  activeStrokeWidth?: number;
}

export function StatCard({
  icon,
  title,
  time,
  unit = 'min',
  distance,
  progress,
  chartSize = 46,
  trackStrokeWidth = 1.5,
  activeStrokeWidth = 5,
}: StatCardProps) {
  return (
    <View className="flex-1 border border-[#CCC6A3]/60 shadow-sm rounded-[24px] p-3.5 bg-white justify-between">
      {/* Top Header: Icon + Title */}
      <View className="flex-row items-center gap-1.5">
        {icon}
        <Text className="text-[#191812] font-semibold text-xs">{title}</Text>
      </View>

      {/* Bottom Row: Time + Distance + Polar Chart */}
      <View className="flex-row items-end justify-between mt-4">
        {/* Tempo e Distância */}
        <View>
          <Text className="text-[#191812] font-semibold text-xl leading-tight">
            {time}{' '}
            <Text className="text-xs font-medium text-[#191812]">{unit}</Text>
          </Text>
          <Text className="text-[#333333] text-[9px] mt-0.5">{distance}</Text>
        </View>

        {/* Gráfico circular com espessuras independentes */}
        <ProgressCircle
          progress={progress}
          size={chartSize}
          trackStrokeWidth={trackStrokeWidth}
          activeStrokeWidth={activeStrokeWidth}
        />
      </View>
    </View>
  );
}
