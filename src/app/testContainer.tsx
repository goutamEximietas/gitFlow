import styled from 'styled-components';
import React from 'react';

const style = {
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    backdropFilter: 'blur(0.5px )',
    borderRadius: '10px',
    border: '3px solid rgba(255, 255, 255, 0.18)',
}


const GlassContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 6px 30px;
  overflow: hidden;
  z-index:100;
`;

const LightLeftFall = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.08), transparent);
    border-top-left-radius: 10px;
    border-left:1.4px solid rgba(255, 255, 255,0.8);
    border-bottom-left-radius: 10px;
`;
const LightRightFall = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.08), transparent);
    border-top-right-radius: 10px;
    border-right:1.4px solid rgba(255, 255, 255,0.8);
    border-bottom-right-radius: 10px;
`;
const LightTopFall = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), transparent);
    border-top-right-radius: 10px;
    border-top:1.4px solid rgba(255, 255, 255,0.8);
    border-top-left-radius: 10px;
`;
const LightBottomFall = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.08), transparent);
    border-bottom-left-radius: 10px;
    border-bottom:1.4px solid rgba(255, 255, 255,0.8);
    border-bottom-right-radius: 10px;
`;

interface IGlassMorph {
    children: any;
    style?: React.CSSProperties;
    lightDirection?: 'left' | 'right' | 'bottom' | 'top';
}
const GlassMorphs: React.FC<IGlassMorph> = ({ children, style = {
    minHeight: '500px',
    maxHeight: '50%'
},
    lightDirection = "left"
}) => {
    const getGlassBorder = () => {
        if (lightDirection == 'bottom') {
            return <LightBottomFall />
        } else if (lightDirection == 'top') {
            return <LightTopFall />
        } else if (lightDirection == 'right') {
            return <LightRightFall />
        } else {
            return <LightLeftFall />
        }
    }
    return (
        <GlassContainer style={style}>
            {getGlassBorder()}
            {children}
        </GlassContainer>
    )
}

export default GlassMorphs