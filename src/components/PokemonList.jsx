import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
//import {pokemons} from "../data/pokemons";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../services/pokemonService";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons().then((data) => {
            console.log(data);
            setPokemons(data);
        }).catch((error) => {
            alert("Error obteniendo pokemons. Por favor, intenta de nuevo.");
            console.error("Error obteniendo pokemons:", error);
        });
    }, []);


    return(
        <Grid container spacing ={2}>
            {pokemons.map(
                (pokemonItem) => (
                    <Grid key= {pokemonItem.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <PokemonCard pokemon={pokemonItem}/>    
                    </Grid>
                )
            )}
        </Grid>
    )
}
