"use client";
import { useCookies } from "react-cookie";

interface FavoriteProps {
    id: string;
}
export default function FavoriteStar({ id }: FavoriteProps) {
    const [favorited, setFavorited, removeFavorited] = useCookies([id]);

    // render a star as a button
    // if the cookie (favorited) is true then render a filled star
    // if the cookie (favorited) is false then render an empty star
    return (
        <button
            onClick={() => {
                if (favorited[id]) {
                    removeFavorited(id);
                } else {
                    setFavorited(id, true);
                }
            }}
            className="text-xl"
        >
            {favorited[id] ? <div className="text-yellow-200">★</div> : "☆"}
        </button>
    );
}
