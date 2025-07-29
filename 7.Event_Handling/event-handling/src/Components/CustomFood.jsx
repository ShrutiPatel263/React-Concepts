import styles from './CustomFood.module.css'

function CustomFood(){

    const handleOnChange=(event)=>{
        console.log(event.target.value)
    };
    return <input type="text" placeholder="Order Custom food" className={styles['customfood']}
     onChange={handleOnChange}></input>
}

export default CustomFood;
