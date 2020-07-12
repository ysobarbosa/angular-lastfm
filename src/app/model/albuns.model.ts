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

export interface Albuns {
  topalbums: {
    album: {
      artist: {
        name: string;
      },
      attr: {
        rank: number;
      }

      image: {
        size: string;
         text: string;
      }
      playcount: string;
      url: string;
    }
  }
}
