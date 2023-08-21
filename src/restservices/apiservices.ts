import  {constant} from '../constant.ts';
export class apiservices{
    
     static appurl:string;
    
     

    static dologin(userId:any,pwd:any){

        alert("USER-> "+userId)

        alert("PWD-> "+pwd)

        const requestData = {
            userIdvalue: userId,
            pwdValue: pwd
          };


          const requestOptions: RequestInit = {
            method: "POST", // Change to appropriate method (POST, PUT, DELETE, etc.)
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
          };
          
          
          fetch(constant.appbaseurl+'/rest/dologin', requestOptions)
        .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data: any) => {
    console.log("API response data:", data);
    // Do something with the API response data
  })
  .catch((error: Error) => {
    console.error("API call error:", error);
    // Handle errors
  });
        
    }


}