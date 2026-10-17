export const validData = (email, password)=>
{
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const validPassword=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(password);
    if(email.length==0) return "enter email"
    if(password.length==0) return "enter password"
    if(!validEmail) return "Email is not Valid";
    if(!validPassword) return "password is not valid";
    return null ;
}