import React, { useState } from 'react'
import styles from '../../styles/utility/flex.module.scss';
import { SearchButton, TextInput } from '../../components/atoms';
import { useStringChangeEvent } from '../../lib/customHook';
import { Hotels } from '../../types/hotels';
import { searchHotels } from 'lib/hotels';

interface Props {
    handleHotels: (fetchedHotels: Hotels) => void
}

const SearchField: React.FC<Props> = (props) => {
    const { handleHotels } = props;

    const [ keyWord, setKeyWord ] = useState("")
    const handleKeyWord = useStringChangeEvent(setKeyWord)

    return (
        <div className={styles.flex__row_center}>
            <TextInput
                type="text"
                value={keyWord}
                onChange={handleKeyWord}
            />
            <SearchButton
                label="Search"
                onClick={async () => {
                    const hotels = await searchHotels(keyWord)
                    handleHotels([ ...hotels ])
                }}
            />
        </div>
    )
}

export default SearchField
