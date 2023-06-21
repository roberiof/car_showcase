"use client";
import React , {useState} from 'react'
import { SearchManufacturer , SearchButton } from './'
import Image from 'next/image';

const SearchBar = () => {
  const [manufacturer , setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')

  const handleSearch = () =>{

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton
          otherClasses="sm:hidden"
        />
      </div>

      <div className='searchbar__item'>
          <Image
            src='/model-icon.png'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car model'
          />
          <input
            type='text'
            name='model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan...'
            className='searchbar__input'
          />
          <SearchButton otherClasses='sm:hidden' />
      </div>
    
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar