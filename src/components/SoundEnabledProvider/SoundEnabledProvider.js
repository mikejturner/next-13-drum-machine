'use client';
import React from 'react';

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export default SoundEnabledProvider;

// Josh added this convenient custom hook when make it's easier for components
// to consume the context. It also raises an error if a component not within
// <SoundEnabledProvider> tries to erroneously access the context.
//
// How to use:
// import { useSoundEnabled } from '../SoundEnabledProvider';
// const { soundEnabled, setSoundEnabled } = useSoundEnabled();
export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}
