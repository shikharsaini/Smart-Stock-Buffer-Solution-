import React from "react";
class Footer extends React.Component{
    render()
    {
        return(
            <footer className="page-footer font-small" style={{backgroundColor: "#42C2FF"}}>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> AnyLink.com</a>
                </div>
            </footer>
        );
    }
}
export default Footer;