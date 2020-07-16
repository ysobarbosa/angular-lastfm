export interface Artists {
  artist: {
    name: string,
    url: string,

    image: {
      text: string;
      size: string;
    }

    similar: {
      artist:  {
        name: string;
      }
    }

    bio: {
      content: string
    }
  }
}
