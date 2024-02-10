import { ReactNode } from 'react';

export type ChildrenT = {
  children: ReactNode;
};

export type PokeListT = {
  name: string;
  url: string;
};

export type PokeNameT = {
  length: number;
  name: string;
};

export type LanguageT = {
  language: any;
  name: string;
  url: string;
};

export interface NamesT {
  name: string;
  language: LanguageT;
}
export interface FlavorEntriesT {
  flavor_text: string;
  language: LanguageT;
}
export interface GeneraT {
  genus: string;
  language: LanguageT;
}
export interface PokeDetailDatasT {
  names: NamesT[];
  flavor_text_entries: FlavorEntriesT[];
  genera: GeneraT[];
}
