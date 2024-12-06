try 
{
    let result = 10 / 0;
    if (result === Infinity)
    {
        throw new Error("You can't divide by zero!");
    }
}
 catch (error) 
{
    document.getElementById("error-message").innerText = error.message;
}