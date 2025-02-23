import { Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppContextProvider } from './Context/UserContext.tsx';
import GameAudio from './GameObjects/GameAudio.ts';

import "@radix-ui/themes/styles.css";
import "./index.css";

GameAudio.play()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppContextProvider>
            <Theme appearance='dark' radius='large'>
                <App />
            </Theme>
        </AppContextProvider>
    </StrictMode>
);
