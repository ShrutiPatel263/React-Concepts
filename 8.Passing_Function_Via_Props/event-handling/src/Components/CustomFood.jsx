import styles from './CustomFood.module.css'

function CustomFood({ handleOnChange }){  //This custom food is used by app.jsx so we define their behaviour their and just pass here

    return <input type="text" placeholder="Order Custom food" className={styles['customfood']}
     onChange={handleOnChange}></input>
}

export default CustomFood;
