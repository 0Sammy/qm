declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      native_language_names: boolean;
      detect_browser_language: boolean;
      wrapper_selector: string;
      flag_size: number;
      flag_style: string;
    };
  }
}

export {};
