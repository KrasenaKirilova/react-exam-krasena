


// export { useState } from 'react';


// export const Register = () => {


//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [repass, setreaPass] = useState('');
//     const [gender, setGender] = useState('male');
//     const [sitizenShip, setSitizenShip] = useState('eu');



//     const onRegister = (e) => {
//         e.preventDefault();
//     }


//     return (
//         <>
//             <h3> Register form:</h3>

//             <form onSubmit={onRegister}>
//                 <div>
//                     <label htmlFor="username">User name: </label>
//                     <input type="text" id="username" name="username"></input>

//                 </div>

//                 <div>
//                     <label htmlFor="password">Password: </label>
//                     <input type="password" id="password" name="password"></input>
//                 </div>

//                 <div>
//                     <label htmlFor="repass">Repeat password: </label>
//                     <input type="password" id="repass" name="repass"></input>
//                 </div>
//                 <div>
//                     <label htmlFor="gender">Gender: </label>
//                     <input type="radio" id="gender" name="gender" value="male" /> Male
//                     <input type="radio" id="gender" name="gender" value="female" /> Female
//                 </div>
//                 <div>
//                 <label>Sitizenship: </label>
//                 <select id="sitzenship"  name="sitzenship">
//                     <option value="eu">EU</option>
//                     <option value="noneu">Non EU</option>
//                 </select>
//                 </div>

//                 <input type="submit" value="login"></input>
//             </form>
//         </>
//     );
// };

import { Link } from "react-router-dom";


export const Register = () => {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}