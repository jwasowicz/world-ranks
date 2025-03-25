export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      nno: {
        official: string;
        common: string;
      };
      nob: {
        official: string;
        common: string;
      };
      smi: {
        official: string;
        common: string;
      };
    };
  };
}
