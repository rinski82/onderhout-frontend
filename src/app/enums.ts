
  export const priorityEnum = {
    H: { variable: "H", display: "H - Hoog" } as EnumLayout,
    M: { variable: "M", display: "M - Midden" } as EnumLayout,
    L: { variable: "L", display: "L - Laag" } as EnumLayout
  };

  // @ts-ignore
export const priorityArray: string[] = ['H','M','L'];

export interface EnumLayout {
  variable: string;
  display: string;
}
