import { Button } from '@/components/ui/button';
import { Pokemon, sprite, TypeToColour } from './entry';

type ModalProps = {
    id? : string
    isOpen? : boolean
    children? : React.ReactNode
    data? : Pokemon
    bgColour? : string
}

export const Modal = ({id = '', isOpen=false, data, bgColour='bg-gray-900'} : ModalProps = {}) => {
    if (!isOpen) return null
    console.log(data)
    return <>
        <div id={id} className={"hover:cursor-auto fixed z-50 inset-0 bg-opacity-20 overflow-y-auto h-full w-full px-4 "+bgColour}>
            <div className={"relative top-20 mx-auto shadow-xl rounded-md max-w-[75%] min-h-[75%] "+bgColour}>
                <div className="flex justify-end p-2">
                <Button onClick={()=>{
                    isOpen = !isOpen
                    document.body.classList.toggle('overflow-y-hidden', !isOpen);
                }} variant="outline">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </Button>
                </div>
                {data!=null?<>
                <div className='flex'>
                    <div className='flex flex-col items-center flex-wrap justify-center p-2 m-2 min-w-[50%]'>
                        <h4 className="text-white font-bold text-3xl lg:text-5xl" style={{ textShadow: "0px 0px 6px black"}}>{data.name[0].toUpperCase() + data.name.slice(1)}</h4>
                        <img className="w-[50%] max-w-[192px] max-h-[192px]" src={data.sprites.front_default}/>
                    </div>
                    <div className='w-[100%]'>
                        {data.types.map((type) => 
                            <div className={"flex justify-center items-center border-4 border-gray-600 m-2 rounded-md px-[5%] w-[90%] h-[50%] " + TypeToColour.get(type.type.name)}>
                                <h4 className="text-white font-bold text-2xl lg:text-4xl" style={{ textShadow: "0px 0px 6px black"}}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</h4>
                            </div>)}
                    </div>
                    <div>
                    </div>
                </div>
                {data.abilities.map((abi) => <h4 className="mx-[10px] my-[40px] text-white font-bold text-xl lg:text-2xl" style={{ textShadow: "0px 0px 6px black"}}>
                    {abi.ability.name[0].toUpperCase() + abi.ability.name.slice(1)}
                </h4>)}
                <h4 className="mx-[10px] my-[20px] py-[20px] text-white font-bold text-xl lg:text-2xl" style={{ textShadow: "0px 0px 6px black"}}>
                    And down here imagine some more useful information or moves or something :)
                    </h4>
                </>
                    :<p>still loading...</p>}
            </div>
        </div>
    </>
}