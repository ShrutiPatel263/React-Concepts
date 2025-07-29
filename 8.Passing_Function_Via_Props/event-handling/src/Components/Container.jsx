//This is used to pass childern 
import styles from './Container.module.css'

function Container(props){
   return <div className={styles['container']}>{props.children}</div>
}

export default Container;