"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GTranslate() {
    useEffect(() => {
        // Avoid multiple initializations if component re-renders
        if (typeof window !== "undefined" && !window.gtranslateSettings) {
            window.gtranslateSettings = {
                default_language: "en",
                native_language_names: true,
                detect_browser_language: true,
                wrapper_selector: ".gtranslate_wrapper",
                flag_size: 16,
                flag_style: "3d",
            };
        }
    }, []);

    return (
        <>
            {/* GTranslate target container */}
            <div className="gtranslate_wrapper"></div>

            {/* GTranslate Script */}
            <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js" strategy="afterInteractive" defer />
        </>
    );
}
