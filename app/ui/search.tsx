'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams , useRouter, usePathname } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter(); //llamada al método replace de useRouter

  function handleSearch(term: string){
    //instanciamos los parametros de la URL
    const params = new URLSearchParams(searchParams);
      if(term){
        params.set('query', term);
        /* Si term tiene un valor, se establece el parámetro query en la URL con este valor. Esto significa que si el usuario ingresa un término de búsqueda, se añadirá (o actualizará) el parámetro query en la URL con el término proporcionado. */       
      }else {
        /* se elimina el parámetro query de la URL. Esto es útil para limpiar la búsqueda cuando el usuario borra el término de búsqueda, asegurando que la URL no contenga parámetros de búsqueda innecesarios. */
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);

    console.log(term); // pinto en consola por curiosidad
    console.log(`${pathname}?${params.toString()}`);
  }
  
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{
          handleSearch(e.target.value);
        }}
        defaultValue = { searchParams.get('query')?.toString()}
        // defaultValue = "cosas" 
        /* El operador ?. asegura que, si searchParams.get('query') es null o undefined, no se intente llamar a toString() sobre un valor null o undefined, lo cual evitaría un error. */
      />
      
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
