export default function Layout({children}){
    //No need to do const {children} = props needed anymore.
    // JS unpacked it.
    return(
        <div>
            {children}
            Hello Layout
        </div>
    )
}