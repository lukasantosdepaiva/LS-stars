import { CSSProperties, PointerEvent, ReactNode, useState } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const [style, setStyle] = useState<CSSProperties>({});

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
    });
  };

  const handlePointerLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)',
    });
  };

  return (
    <div
      className={`tilt-card ${className}`}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
