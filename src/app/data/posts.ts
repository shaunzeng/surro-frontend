const posts = [
  {
    type: 'video',
    name: 'Mayra Sibley',
    date: '10 minutes ago',
    profilePic: '/assets/img/profiles/l-1.jpg',
    detail: 'Keeping your eye on the ball while performing a deep dive on the start-up mentality.',
    image: '/assets/img/video/poster.jpg',
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likeCount: 125,
    commentCount: 3,
    comments: [
      {
        name: 'Kathryn Mengel',
        detail:
          `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris. Nam in ornare erat.
          Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius.`,
        date: 'Two hours ago',
        thumb: '/assets/img/profiles/l-3.jpg',
        likes: 1,
        id: 1
      },
      {
        name: 'Philip Nelms',
        detail: 'Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.',
        date: 'Two hours ago',
        thumb: '/assets/img/profiles/l-4.jpg',
        likes: 5,
        id: 2
      }],
    id: 1
  },
  {
    type: 'image',
    name: 'Mayra Sibley',
    date: '2 hours ago',
    profilePic: '/assets/img/profiles/l-1.jpg',
    detail:
      `Podcasting operational change management inside of workflows to establish a framework.
      Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.`,
    image: '/assets/img/details/5.jpg',
    video: '',
    likeCount: 3,
    commentCount: 1,
    comments: [
      {
        name: 'Latarsha Gama',
        detail: 'Taking seamless key performance indicators offline to maximise the long tail.',
        date: 'Five days ago',
        thumb: '/assets/img/profiles/l-7.jpg',
        likes: 2,
        id: 4
      }
    ],
    id: 2
  },
  {
    type: 'text',
    name: 'Mayra Sibley',
    date: '3 hours ago',
    profilePic: '/assets/img/profiles/l-1.jpg',
    detail:
      `Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.
      Keeping your eye on the ball while performing a deep dive on the start-up mentality.`,
    image: '',
    video: '',
    likeCount: 28,
    commentCount: 0,
    comments: [],
    id: 3
  },
  {
    type: 'image',
    name: 'Mayra Sibley',
    date: 'A day ago',
    profilePic: '/assets/img/profiles/l-1.jpg',
    detail: `Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality.`,
    image: '/assets/img/details/1.jpg',
    video: '',
    likeCount: 11,
    commentCount: 4,
    comments: [{
      name: 'Latarsha Gama',
      detail: 'Taking seamless key performance indicators offline to maximise the long tail.',
      date: 'Five days ago',
      thumb: '/assets/img/profiles/l-7.jpg',
      likes: 0,
      id: 4
    },
    {
      name: 'Laree Munsch',
      detail: 'Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.',
      date: 'Six days ago',
      thumb: '/assets/img/profiles/l-2.jpg',
      likes: 14,
      id: 5
    }],
    id: 4
  }
];

export default posts;
