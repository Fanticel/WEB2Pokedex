import { useNavigate } from 'react-router';

import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';

import { Entry } from '@/components/private/entry';
// import { Modal } from '@/components/private/modal';

type EntryProps = {
  name? : string,
  url? : string
}

const LandingRoute = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(paths.app.about.getHref());
  };
  const perPage = 20
  const [pokedexRows, setPokedexRows] = useState([]);
  const [nextUrl, setNextUrl] = useState(<></>)
  const [prevUrl, setPrevUrl] = useState(<></>)
  const [request, setRequest] = useState("https://pokeapi.co/api/v2/pokemon?limit="+perPage)

  const  getPokemenData = (request = '') => {
    let promise = fetch(request)
    .then(response => {if (response.ok) return response.json()
                      throw new Error("Something went wrong :(")
    })
    .catch(err => console.log(err))
    return promise
  }
  useEffect(() => {
    async function createPokedex() {
      
      let data = await getPokemenData(request)
      setNextUrl(data.next != null ? <Button variant="destructive" onClick={()=>{setRequest(data.next)}}>→</Button> : <Button variant="ghost" disabled={true}>→</Button>)
      setPrevUrl(data.previous != null ? <Button variant="destructive" onClick={()=>{setRequest(data.previous)}}>←</Button> : <Button variant="ghost" disabled={true}>←</Button>)
      setPokedexRows(data.results)
    }

    createPokedex();
  }, [request]);
  return (
    <>
      <div className="flex-col h-screen bg-white">
        <div className="mx-5 max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Pokedex</span>
          </p>
          <div className="mt-8 flex justify-left">
            <div className="inline-flex rounded-md shadow">
              <Button
                variant="destructive"
                icon={
                  <svg
                    fill="currentColor"
                    viewBox="0 -3.5 24 24"
                    className="size-8"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z"
                      fill="#000000"
                    />
                  </svg>
                }
              >
                Pokedex
              </Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button
                variant="outline"
                onClick={handleStart}
                icon={
                  <svg
                    className="size-6"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>message_three_points [#1560]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-420.000000, -959.000000)"
                        fill="#000000"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M380.872728,808.94 C380.872728,810.045 379.977728,810.94 378.872728,810.94 C377.767728,810.94 376.872728,810.045 376.872728,808.94 C376.872728,807.835 377.767728,806.94 378.872728,806.94 C379.977728,806.94 380.872728,807.835 380.872728,808.94 M375.872728,808.94 C375.872728,810.045 374.977728,810.94 373.872728,810.94 C372.767728,810.94 371.872728,810.045 371.872728,808.94 C371.872728,807.835 372.767728,806.94 373.872728,806.94 C374.977728,806.94 375.872728,807.835 375.872728,808.94 M370.872728,808.94 C370.872728,810.045 369.977728,810.94 368.872728,810.94 C367.767728,810.94 366.872728,810.045 366.872728,808.94 C366.872728,807.835 367.767728,806.94 368.872728,806.94 C369.977728,806.94 370.872728,807.835 370.872728,808.94 M381.441728,817 C381.441728,817 378.825728,816.257 377.018728,816.257 C375.544728,816.257 375.208728,816.518 373.957728,816.518 C369.877728,816.518 366.581728,813.508 366.075728,809.851 C365.403728,804.997 369.268728,800.999 373.957728,801 C377.900728,801 381.002728,803.703 381.732728,807.083 C382.000728,808.318 381.973728,809.544 381.654728,810.726 C381.274728,812.131 381.291728,813.711 381.703728,815.294 C381.914728,816.103 382.302728,817 381.441728,817 M383.917728,815.859 C383.917728,815.859 383.640728,814.794 383.639728,814.79 C383.336728,813.63 383.271728,812.405 383.584728,811.248 C383.970728,809.822 384.035728,808.268 383.687728,806.66 C382.767728,802.405 378.861728,799 373.957728,799 C367.999728,798.999 363.264728,804.127 364.094728,810.125 C364.736728,814.766 368.870728,818.518 373.957728,818.518 C375.426728,818.518 375.722728,818.257 377.019728,818.257 C378.583728,818.257 380.795728,818.919 380.795728,818.919 C382.683728,819.392 384.399728,817.71 383.917728,815.859"
                            id="message_three_points-[#1560]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                }
              >
                About
              </Button>
            </div>
          </div>
        </div>
        <div className='flex justify-around'>
          {prevUrl}
          {nextUrl}
        </div>
        {/*encompasses the pokedex itslef*/}
        <div className='flex flex-wrap justify-center'>
          {pokedexRows.map((poke : EntryProps, index) => (<Entry name={poke.name} url={poke.url}></Entry>))}
        </div> 
      </div>
    </>
  );
};
// Default webpage,o
/* <Head description="Welcome to bulletproof react" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bulletproof React</span>
          </h2>
          <img src={logo} alt="react" />
          <p>Showcasing Best Practices For Building React Applications</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button
                onClick={handleStart}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                }
              >
                Get started
              </Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/alan2207/bulletproof-react"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  icon={
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Github Repo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div> */
export default LandingRoute;
