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
export interface FlavorEntriesT {
  flavor_text: string;
  language: LanguageT;
}
export interface GeneraT {
  genus: string;
  language: LanguageT;
}
export interface PokeDetailDatasT {
  flavor_text_entries: FlavorEntriesT[];
  genera: GeneraT[];
}
