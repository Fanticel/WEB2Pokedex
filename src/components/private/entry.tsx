import { useState, useEffect } from "react";
import { Modal } from "./modal";

type EntryProps = {
    name? : string,
    url? : string
}
export type Pokemon = {
    sprites : sprite
    name : string
    types : Array<TOType>
    abilities : Array<TOAbility>
}
type TOType = {
    type : PokemonType
}
type PokemonType = {
    name : string
}
type TOAbility = {
    ability : Ability
}
type Ability = {
    name : string
    url : string
}
export type sprite = {
    front_default : string
    back_default : string
}
export const TypeToColour = new Map()

TypeToColour.set("normal", 'bg-neutral-400')
TypeToColour.set("fire", 'bg-orange-700')
TypeToColour.set("water", 'bg-teal-500')
TypeToColour.set("grass", 'bg-lime-600')
TypeToColour.set("electric", 'bg-amber-300')
TypeToColour.set("ice", 'bg-sky-500')
TypeToColour.set("fighting", 'bg-red-300')
TypeToColour.set("poison", 'bg-purple-300')
TypeToColour.set("ground", 'bg-yellow-100')
TypeToColour.set("flying", 'bg-blue-400')
TypeToColour.set("psychic", 'bg-rose-300')
TypeToColour.set("bug", 'bg-lime-300')
TypeToColour.set("rock", 'bg-zinc-600')
TypeToColour.set("ghost", 'bg-indigo-700')
TypeToColour.set("dragon", 'bg-indigo-400')
TypeToColour.set("dark", 'bg-amber-600')
TypeToColour.set("steel", 'bg-gray-700')
TypeToColour.set("fairy", 'bg-pink-500')

export const Entry = ({name = '', url = ''} : EntryProps = {}) => {

    const [pokemonFull, setPokemonFull] = useState<Pokemon>();
    const [colour, setColour] = useState("bg-gray-300");
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{
        async function getPokemonDetail(){
            let promise = fetch(url)
            .then(response => {if (response.ok) return response.json()
                throw new Error("Something went wrong :(")})
            .catch(err => console.log(err))
            let data = await promise
            
            setColour(TypeToColour.get(data.types[0].type.name))
            setPokemonFull(data)
        }

        getPokemonDetail()
    },[url])
    return  pokemonFull != null?
        <div onClick={()=>{setOpenModal(!openModal)}} className={"rounded-md w-[20%] h-[50%] bg-gray-300 shadow-lg p-3 m-4 flex-col "+colour}>
            <h4 className="text-white font-bold text-xl lg:text-3xl" style={{ textShadow: "0px 0px 6px black"}}>{name[0].toUpperCase() + name.slice(1)}</h4>
            <div className="flex justify-around">
                {<img className="w-[50%] max-w-[96px] max-h-[96px]" src={pokemonFull.sprites.front_default}/>}
                {<img className="w-[50%] max-w-[96px] max-h-[96px]" src={pokemonFull.sprites.back_default}/>}
            </div>
            <Modal id={"modal"+pokemonFull.name} isOpen={openModal} data={pokemonFull} bgColour={
                colour
            }></Modal>
        </div>
        :<h3 className="font-bold text-3xl">{name}</h3>
} 
