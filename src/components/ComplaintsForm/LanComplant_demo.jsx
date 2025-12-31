import { useState } from "react";
// import "./LanComplaints.css"

export default function LanComplaints (){
    let [formData, setFormData]  = useState({
        fullName:"",
        userName:"",
        password:""
    });


    // let handleNameChange = (event) => {
    //     setFullname(event.target.value);
    // }

    // let handleUserName = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let valueName = event.target.value;

        // setFormData((currData) => {
        //     currData[fieldName] = valueName;
        //     return {...currData};
        // }
        // )

        setFormData((currData) => {
            return {...currData ,
                [fieldName] : valueName
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefult();
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            &nbsp;
            <input 
                placeholder="Enter full name" 
                type="text" value={formData.fullName} 
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
            />

            <br />
            <br />

            <label htmlFor="username">Username</label>
            &nbsp;
            <input 
                placeholder="Enter Username" 
                type="text" value={formData.userName} 
                onChange={handleInputChange}
                id="username"
                name="userName"
            />
            <br />
            <br />

            <label htmlFor="password">Password</label>
            &nbsp;
            <input 
                placeholder="Enter Password" 
                type="password" value={formData.password} 
                onChange={handleInputChange}
                id="password"
                name="password"
            />
            <br />
            <br />
            
            <button>Submit</button>
        </form>
    );
};