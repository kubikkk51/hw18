import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";

const AUTHORS = [
    {
        author: "Дэниэл Рэдклифф",
        avatar: "https://avatarko.ru/img/kartinka/1/Potter.jpg",
        nickname: "Гарри Поттер",
    },
    {
        author: "Руперт Гринт",
        avatar: "https://pm1.narvii.com/6901/929299d6293ce268b3f4ee2cc16003a0eac7e8a6r1-600-800v2_00.jpg",
        nickname: "Рон Уизли",
    },
    {
        author: "Гермиона Грейнджер",
        avatar: "https://www.vokrug.tv/pic/person/f/4/a/9/f4a9c7b9ce44e06ac21466d91cf1a6ce.jpeg",
        nickname: "Эмма Уотсон",
    },
]

const CreatePost = () => { 
    const [author, setAuthor] = useState("Дэниэл Рэдклифф");
    const [contents, setContents] = useState("");
    const [image, setImage] = useState("");

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return day + "." + month + "." + year;
    }

    const dispatch = useDispatch();

    const createNewPost = (event) => {
        event.preventDefault();
        const date = getDate();
        const likes = 0;
        const coments = 0;
        const reposts = 0;
        const authorSelect = AUTHORS.find((item) => item.author === author);
        dispatch(addPost({ author: authorSelect.author, avatar: authorSelect.avatar, nickname: authorSelect.nickname, date, contents, image, likes, coments, reposts }));
        setAuthor("Дэниэл Рэдклифф");
        setContents("");
        setImage("");
    };

    return (
        <form onSubmit={createNewPost} className="create-form">
            <select onChange={evt => setAuthor(evt.target.value)}>
                {AUTHORS.map((item, index) => (
                    <option value={item.author} key={index}>{item.author}</option>
                ))}

            </select>

            <input
                type="text"
                placeholder="Contents"
                value={contents}
                onChange={e => setContents(e.target.value)}
            />

            <input
                type="text"
                placeholder="Image"
                value={image}
                onChange={e => setImage(e.target.value)}
            />

            <button type="submit" onClick={createNewPost}>
                Create new post
            </button>
        </form>
    )
}

export default CreatePost;