const mockArtists = {
  data: [
    {
      id: 13,
      name: 'Eminem',
      link: 'https://www.deezer.com/artist/13',
      picture: 'https://api.deezer.com/artist/13/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
      nb_album: 56,
      nb_fan: 14889180,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
      type: 'artist',
    },
    {
      id: 5305180,
      name: 'Tribute to Eminem',
      link: 'https://www.deezer.com/artist/5305180',
      picture: 'https://api.deezer.com/artist/5305180/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/40dc26ccf00d62eba8e5804325776269/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/40dc26ccf00d62eba8e5804325776269/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/40dc26ccf00d62eba8e5804325776269/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/40dc26ccf00d62eba8e5804325776269/1000x1000-000000-80-0-0.jpg',
      nb_album: 2,
      nb_fan: 1571,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/5305180/top?limit=50',
      type: 'artist',
    },
    {
      id: 4205034,
      name: 'TI feat. Eminem',
      link: 'https://www.deezer.com/artist/4205034',
      picture: 'https://api.deezer.com/artist/4205034/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 633,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4205034/top?limit=50',
      type: 'artist',
    },
    {
      id: 1663671,
      name: 'Dirty Money Music Group featuring Eminem',
      link: 'https://www.deezer.com/artist/1663671',
      picture: 'https://api.deezer.com/artist/1663671/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 4398,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/1663671/top?limit=50',
      type: 'artist',
    },
    {
      id: 4288978,
      name: 'Eminem, Royce',
      link: 'https://www.deezer.com/artist/4288978',
      picture: 'https://api.deezer.com/artist/4288978/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 1183,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4288978/top?limit=50',
      type: 'artist',
    },
    {
      id: 10025506,
      name: `Joe Budden, Royce da 5'9", Yelawolf, Joell Ortiz, Eminem & Crooked I`,
      link: 'https://www.deezer.com/artist/10025506',
      picture: 'https://api.deezer.com/artist/10025506/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 680,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/10025506/top?limit=50',
      type: 'artist',
    },
    {
      id: 319933,
      name: 'Eminem, Dr. Dre',
      link: 'https://www.deezer.com/artist/319933',
      picture: 'https://api.deezer.com/artist/319933/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 1416,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/319933/top?limit=50',
      type: 'artist',
    },
    {
      id: 4183455,
      name: 'Made famous by Eminem',
      link: 'https://www.deezer.com/artist/4183455',
      picture: 'https://api.deezer.com/artist/4183455/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 261,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4183455/top?limit=50',
      type: 'artist',
    },
    {
      id: 490688,
      name: 'Outsidaz (ft. Eminem)',
      link: 'https://www.deezer.com/artist/490688',
      picture: 'https://api.deezer.com/artist/490688/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 510,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/490688/top?limit=50',
      type: 'artist',
    },
    {
      id: 1381341,
      name: 'Eminem feat Dr. Dre Karaoke Band',
      link: 'https://www.deezer.com/artist/1381341',
      picture: 'https://api.deezer.com/artist/1381341/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/5b1e0c94a2d6c263b9bc329388ca7d01/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/5b1e0c94a2d6c263b9bc329388ca7d01/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/5b1e0c94a2d6c263b9bc329388ca7d01/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/5b1e0c94a2d6c263b9bc329388ca7d01/1000x1000-000000-80-0-0.jpg',
      nb_album: 1,
      nb_fan: 1200,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/1381341/top?limit=50',
      type: 'artist',
    },
    {
      id: 10025492,
      name: 'Black Thought, Mos Def & Eminem',
      link: 'https://www.deezer.com/artist/10025492',
      picture: 'https://api.deezer.com/artist/10025492/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 399,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/10025492/top?limit=50',
      type: 'artist',
    },
    {
      id: 14628647,
      name: 'Shabaam Sahdeeq, Eminem, Skam2, A.L. Skills, Kwest The Madd Ladd',
      link: 'https://www.deezer.com/artist/14628647',
      picture: 'https://api.deezer.com/artist/14628647/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 214,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/14628647/top?limit=50',
      type: 'artist',
    },
    {
      id: 1616209,
      name: 'J-black & Masta Ace Eminem',
      link: 'https://www.deezer.com/artist/1616209',
      picture: 'https://api.deezer.com/artist/1616209/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 296,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/1616209/top?limit=50',
      type: 'artist',
    },
    {
      id: 4088021,
      name: 'Nutty Professor The Klumps Soundtrack featuring Redman & eminem',
      link: 'https://www.deezer.com/artist/4088021',
      picture: 'https://api.deezer.com/artist/4088021/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 388,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4088021/top?limit=50',
      type: 'artist',
    },
    {
      id: 4500576,
      name: 'Bad Meets Evil, Eminem',
      link: 'https://www.deezer.com/artist/4500576',
      picture: 'https://api.deezer.com/artist/4500576/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 485,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4500576/top?limit=50',
      type: 'artist',
    },
    {
      id: 82371942,
      name: 'Bizarre, Eminem, Fuzz',
      link: 'https://www.deezer.com/artist/82371942',
      picture: 'https://api.deezer.com/artist/82371942/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 24,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/82371942/top?limit=50',
      type: 'artist',
    },
    {
      id: 81157132,
      name: "Royce Da 5'9, Eminem",
      link: 'https://www.deezer.com/artist/81157132',
      picture: 'https://api.deezer.com/artist/81157132/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 26,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/81157132/top?limit=50',
      type: 'artist',
    },
    {
      id: 1278415,
      name: 'Bad Meets Evil (Eminem & Royce)',
      link: 'https://www.deezer.com/artist/1278415',
      picture: 'https://api.deezer.com/artist/1278415/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 727,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/1278415/top?limit=50',
      type: 'artist',
    },
    {
      id: 369227,
      name: 'Eminemmylou',
      link: 'https://www.deezer.com/artist/369227',
      picture: 'https://api.deezer.com/artist/369227/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/5700c61f95bff37b19477a7abe2e9cc5/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/5700c61f95bff37b19477a7abe2e9cc5/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/5700c61f95bff37b19477a7abe2e9cc5/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/5700c61f95bff37b19477a7abe2e9cc5/1000x1000-000000-80-0-0.jpg',
      nb_album: 3,
      nb_fan: 566,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/369227/top?limit=50',
      type: 'artist',
    },
    {
      id: 4398220,
      name: 'Jason Porter, Duke, PROOF of Eminem D12, D-Roll, Crooked',
      link: 'https://www.deezer.com/artist/4398220',
      picture: 'https://api.deezer.com/artist/4398220/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 655,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4398220/top?limit=50',
      type: 'artist',
    },
    {
      id: 142514452,
      name: 'Cypress Hill feat. Eminem and Noreaga',
      link: 'https://www.deezer.com/artist/142514452',
      picture: 'https://api.deezer.com/artist/142514452/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 4,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/142514452/top?limit=50',
      type: 'artist',
    },
    {
      id: 295652,
      name: 'Jason Porter, PROOF Of Eminem D12, Crooked, D-Roll, Duke',
      link: 'https://www.deezer.com/artist/295652',
      picture: 'https://api.deezer.com/artist/295652/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 398,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/295652/top?limit=50',
      type: 'artist',
    },
    {
      id: 4289210,
      name: 'Eminem, Royce 5-9, New Shrooms',
      link: 'https://www.deezer.com/artist/4289210',
      picture: 'https://api.deezer.com/artist/4289210/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 688,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4289210/top?limit=50',
      type: 'artist',
    },
    {
      id: 13452667,
      name: 'DJ Kay Slay feat. Eminem & Obie Trice',
      link: 'https://www.deezer.com/artist/13452667',
      picture: 'https://api.deezer.com/artist/13452667/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 153,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/13452667/top?limit=50',
      type: 'artist',
    },
    {
      id: 4477338,
      name: 'Eminemmylou & Latest Bill',
      link: 'https://www.deezer.com/artist/4477338',
      picture: 'https://api.deezer.com/artist/4477338/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
      nb_album: 0,
      nb_fan: 225,
      radio: true,
      tracklist: 'https://api.deezer.com/artist/4477338/top?limit=50',
      type: 'artist',
    },
  ],
  total: 41,
  next: 'https://api.deezer.com/search/artist/?q=eminem&output=json&index=25',
}

export default mockArtists
