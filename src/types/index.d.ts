export interface IGenericProps {
  sx?: any;
}

export interface ISVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

export interface IImageProps {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
      width: number;
      height: number;
    };
  };
}

export interface ILinkProps {
  id: string;
  url: string;
  label: string;
}
