export interface ICommentWithLike {
    name: string;
    detail: string;
    date: string;
    thumb: string;
    likes: number;
    key: number;
}

const data: ICommentWithLike[] = [
    {
        name: 'Mimi Carreira',
        detail: 'Pellentesque quis cursus mauris.',
        date: 'An hour ago',
        thumb: '/assets/img/profiles/l-1.jpg',
        likes: 2,
        key: 0
    },
    {
        name: 'Kathryn Mengel',
        detail: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius.',
        date: 'Two hours ago',
        thumb: '/assets/img/profiles/l-3.jpg',
        likes: 1,
        key: 1
    },
    {
        name: 'Philip Nelms',
        detail: 'Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.',
        date: 'Two hours ago',
        thumb: '/assets/img/profiles/l-4.jpg',
        likes: 5,
        key: 2
    },
    {
        name: 'Velva Valdovinos',
        detail: 'Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus.',
        date: 'A day ago',
        thumb: '/assets/img/profiles/l-5.jpg',
        likes: 0,
        key: 3
    },
    {
        name: 'Latarsha Gama',
        detail: 'Taking seamless key performance indicators offline to maximise the long tail.',
        date: 'Five days ago',
        thumb: '/assets/img/profiles/l-7.jpg',
        likes: 0,
        key: 4
    },
    {
        name: 'Laree Munsch',
        detail: 'Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.',
        date: 'Six days ago',
        thumb: '/assets/img/profiles/l-2.jpg',
        likes: 14,
        key: 5
    }
];

export default data;
