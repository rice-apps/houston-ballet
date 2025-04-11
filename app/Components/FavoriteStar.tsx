"use client";
import React, { useState, useEffect } from "react";

interface FavoriteProps {
    id: string;
}

interface StarSVGProps {
    isFilled: boolean;
}

const StarSVG = ({ isFilled }: StarSVGProps) => (
    <svg
        className={`transform transition duration-300 ease-in-out ${isFilled ? "fill-yellow-400 stroke-yellow-400" : "fill-transparent stroke-gray-400"} hover:scale-110`}
        width="36"
        height="25"
        viewBox="0 0 49 47"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M24.5 2L31.1756 16.4695L47 18.347L35.3005 29.1647L38.406 44.7956L24.5 37.0124L10.594 44.7977L13.6995 29.1669L2 18.3449L17.8266 16.4674L24.5 2Z"
            strokeWidth="3.22596"
            strokeLinejoin="round"
        />
    </svg>
);

export default function FavoriteStar({ id }: FavoriteProps) {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isStorageAvailable, setIsStorageAvailable] = useState(true);

    // Check if localStorage is available
    const checkStorageAvailability = () => {
        try {
            const testKey = '__storage_test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.error("localStorage not available:", e);
            return false;
        }
    };
    
    useEffect(() => {
        const storageAvailable = checkStorageAvailability();
        setIsStorageAvailable(storageAvailable);
        
        if (!storageAvailable) return;
        
        try {
            if (!localStorage.getItem("favorites")) {
                localStorage.setItem("favorites", JSON.stringify([]));
            }
            
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            setIsFavorited(favorites.includes(id));
        } catch (error) {
            console.error("Error loading favorites:", error);
        }
    }, [id]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isStorageAvailable) {
            console.warn("Cannot save favorites - localStorage unavailable");
            return;
        }
        
        try {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            
            let updatedFavorites;
            if (isFavorited) {
                updatedFavorites = favorites.filter((favoriteId: string) => favoriteId !== id);
            } else {
                updatedFavorites = [...favorites, id];
            }
            
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            
            setIsFavorited(!isFavorited);

            window.dispatchEvent(new CustomEvent('favoritesChanged'));
        } catch (error) {
            console.error("Error saving favorite:", error);
        }

        event.nativeEvent.preventDefault();
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopPropagation();
    };

    return (
        <button
            aria-label={isFavorited ? "Unfavorite" : "Favorite"}
            onClick={handleClick}
            className="rounded-full p-0 pt-1 transition duration-300 ease-in-out"
        >
            <StarSVG isFilled={isFavorited} />
        </button>
    );
}