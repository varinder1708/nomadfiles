import './layout.css'
const Layout = ({ children }) => {

    return (<div class="container">
        <div class="body outer">
            <div class="header"><label>Header</label></div>
            <div class="body inner">
                {children}
            </div>
        </div>
        <div class="footer"><label>Footer</label></div>
    </div>)

}
export default Layout;