import React, { useEffect, useState } from 'react'
import styles from './popup.module.css';

const Popup = ({ data, closeHandler }) => {
    const [state, setState] = useState({})
    useEffect(() => {
        const { code, id, info, name, pleaseNote, url,images } = data;
        console.log(data)
        setState(s => ({
            ...s,
            code,
            id,
            info,
            name,
            pleaseNote,
            url,
            images:[...images]
        }))
    }, [data])
    return (
        <>
            <div className={styles.loginScreen}>
                <a href="#" onClick={closeHandler} className={styles.cancel}>×</a>
                <div style={{
                    textAlign:'center',
                    position: 'relative',
                    top: '20%'
                }}>
                    <h1>Id : {state.id}</h1>
                    <p>Description : {state.info}</p>
                    <p>Name : {state.name}</p>
                    <a href={state.url} target='_blank' style={{
                        color: 'blue'
                    }}>Go To page</a>

<div className={styles.imageContainer}> 
{
    state.images && state.images.length > 0 && 
    state.images.map((e,i)=>{
        const {url} = e;
            return <div key={i} class={styles.divToHoldImage}><img width={100} height={100} src={url} alt={'Not Found'} /></div>
    })
}
</div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Popup);