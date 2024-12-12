import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script';
import { MiroSDKInit } from '../components/SDKInit';
import '../app/globals.css'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Script src="https://miro.com/app/static/sdk/v2/miro.js" strategy="beforeInteractive" />
        <MiroSDKInit fullscreen={false}/>
        <div id="root">

          <div className="grid">
            <div className="cs1 ce12">{ children }</div>
          </div>

        </div>
      </body>
    </html>
  );
} 
