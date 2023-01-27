import classes from './loader.module.css'

function Loader() {
  return (
    <div>
        <div className={classes.overlay}></div>
        <div className={classes['lds-ring']}>
            <div className={classes.absolute}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
            <div className={classes.loading}>Loading...</div>
    </div>


  )
}

export default Loader