import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiYoutube } from 'react-icons/fi';

const contact = () => {
    return (
        <div>
            <article 
            className="br3 w-50-m w-25-l center bg-white shadow-5"
            style={{width:'435px', height:'400px'}}>
                <main className="pa4 w-100">
                    <h1 style={{marginTop:'1em', color:'#0081FF'}}>Contact Us</h1>
                    <hr/>
                    <div>
                       <table className="mt4">
                        <tbody>
                            <React.Fragment>
                                <tr>
                                <td style={{fontSize:'2.5rem'}}><FiMapPin /></td>
                                <td className="f4 pl3 pointer">55 Alcovy Forest Dr <br/>Covington, GA 30014, USA</td>
                                </tr>  
                                <tr>
                                <td style={{fontSize:'2.5rem'}}><FiMail /></td>
                                <td className="f4 pl3 pointer">info@jeewitbachan.com</td>
                                </tr> 
                                <tr>
                                <td style={{fontSize:'2.5rem'}}><FiPhone /></td>
                                <td className="f4 pl3 pointer">(470)755-6225</td>
                                </tr>
                            </React.Fragment> 
                        </tbody>   
                       </table>
                       <div style={{float:'right'}}>
                            <span className="f2 pointer"><FiFacebook/></span> 
                            <span className="f2 ml3 pointer"><FiYoutube/></span>
                       </div>
                    </div>  
                </main>
            </article>      
        </div>
    )
}

export default contact;
