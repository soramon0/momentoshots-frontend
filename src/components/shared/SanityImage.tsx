import type { VFC } from "react";
import Image, { ImageProps } from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { CollectionImage } from "@/src/lib/sanity/schemaTypes";
import sanityClient from "@/src/lib/sanity/client";

type Props = Omit<ImageProps, "src"> & {
  image: CollectionImage;
};

const AppImage: VFC<Props> = ({ image, ...nextImageProps }) => {
  const imageProps = useNextSanityImage(sanityClient, image);

  return (
    <Image
      layout='responsive'
      sizes='(max-width: 800px) 100vw, 800px'
      alt={image.alt}
      {...imageProps}
      {...nextImageProps}
    />
  );
};

export default AppImage;
