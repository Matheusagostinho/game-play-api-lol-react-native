import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChampionProps } from "../components/Champion";
import { COLLECTION_FAVORITES } from '../configs/database';


export async function saveChampionInFavorites(champ: ChampionProps) {
  const newFavorite =champ

  const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
  const favorites = storage ? JSON.parse(storage) : [];

  await AsyncStorage.setItem(
    COLLECTION_FAVORITES,
    JSON.stringify([...favorites, newFavorite])
  );  
}

export async function removeChampionInFavorites(data: ChampionProps) {
  

  const storage = await AsyncStorage.getItem(COLLECTION_FAVORITES);
  const favorites = storage ? JSON.parse(storage) : [];
  const newFavorites = favorites.filter((item: { id: string }) => item.id !== data.id)
  await AsyncStorage.setItem(
    COLLECTION_FAVORITES,
    JSON.stringify([newFavorites])
  );  
}

export async function loadFavorites() {
  const response = await AsyncStorage.getItem(COLLECTION_FAVORITES);
  const storage: ChampionProps[] = response ? JSON.parse(response) : [];
  return storage
}


