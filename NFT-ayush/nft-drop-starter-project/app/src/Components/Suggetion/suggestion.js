import React, { useEffect } from 'react';
import styles from './suggestion.module.css';

const Suggestion = ({suggestions,clickHandler}) =>{
    return (
        <div className={styles.autocomBox} id="suggestion" style={{
            position:'fixed',
            overflow:'hidden',
            width:'35%'
        }}>
            {
                suggestions && suggestions.length > 0?suggestions.map((e,i)=>{
                    const {name,id} = e
                    return <li key={i} onClick={()=>clickHandler(e)}>{name}</li>
                })
                :
                <li>No Data Found</li>
            }
        </div>
    )
}
export default React.memo(Suggestion);