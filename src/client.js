import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
   projectId: 'zcq24jwj',
   dataset: 'production',
   apiVersion: '2022-02-01',
   useCdn: true,
   token: 'skxIQRmVheYhXqOpyGXKz88WQ1KX5b5p8uq8xBSNHNUVRlgQ7yOAP0icqyb8KxlVmgOmQ9XCESnF2SSf5xaeavccgyWpJz4K7QgAKXQr2kXA3CQ9IH90H3Na3XVjK6ckHPeP9uTOLWcvX6sNiHMhsVnJxTRyMW5XyPrBr125F8MrgSR1qRbi'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)