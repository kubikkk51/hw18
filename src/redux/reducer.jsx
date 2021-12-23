import { ADD_POST } from "./actions";

const POSTS = [
    {
        author: "Дэниэл Рэдклифф",
        avatar: "https://avatarko.ru/img/kartinka/1/Potter.jpg",
        nickname: "Гарри Поттер",
        date: "23.12.21",
        contents: "Первый пошел)))",
        image: "https://i.ytimg.com/vi/bRi5XQXNK8k/mqdefault.jpg",
        likes: 69,
        coments: 22,
        reposts: 6,
    },
    {
        author: "Руперт Гринт",
        avatar: "https://pm1.narvii.com/6901/929299d6293ce268b3f4ee2cc16003a0eac7e8a6r1-600-800v2_00.jpg",
        nickname: "Рон Уизли",
        date: "23.12.21",
        contents: "Мама меня убьет",
        image: "https://avatars.mds.yandex.net/get-zen_doc/1901404/pub_5eae4a0c1459ef62a0e74650_5eae59bdb95e7e69bd2e9fe3/scale_1200",
        likes: 10,
        coments: 2,
        reposts: 1,
    },
    {
        author: "Гермиона Грейнджер",
        avatar: "https://www.vokrug.tv/pic/person/f/4/a/9/f4a9c7b9ce44e06ac21466d91cf1a6ce.jpeg",
        nickname: "Эмма Уотсон",
        date: "23.12.21",
        contents: "Как вам мой образ на бал?",
        image: "https://lh3.googleusercontent.com/proxy/7f45t_bsujB7OEoBzzkprr3qT5owKobAkt6GXk_ezj-9deSbfo-oZmLhHKcUw_JJbahXVzOIwvOA2AgVZt8qOomgkgj4LWUeFErxoFzUbXzZzZ82KxF4iTuz",
        likes: 100,
        coments: 8,
        reposts: 20,
    },
];

const initialState = {
    posts: POSTS,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
};

export default reducer;