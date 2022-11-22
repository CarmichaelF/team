import { RTNode } from "@prismicio/types";
export interface IGenericProps {
  sx?: any;
}

export interface ISVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

export interface IImageProps {
  url: string;
  alt: string;
  dimensions: { width: number; height: number };
}

export interface ILinkProps {
  id: string;
  url: string;
  label: string;
}
