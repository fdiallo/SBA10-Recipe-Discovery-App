import { createContext, useContext, type ReactNode } from 'react';
import type { Meal } from '../types';
import { useLocalStorage } from '../hooks/UseLocalStorage';

/**
 * Create context and provide logic for adding and removing favorites
 */
const FavoriteContext = createContext<{
    favorites: Meal[];
    addFavorite: (meal: Meal) => void;
    removeFavorite: (id: string) => void;
} | null>(null);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useLocalStorage<Meal[]>('favorites', []);

    const addFavorite = (meal: Meal) => setFavorites([...favorites, meal]);
    const removeFavorite = (id: string) => setFavorites(favorites.filter(m => m.idMeal !== id));

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
export const useFavorites = () => useContext(FavoriteContext)!;
