//Set an id to validate an admin use
//Definir la cuenta del administrador
export const getAdmin = () => {
    //Id de la cuenta de administrador (Creador de la aplicación)
    return [ 'Vg7vghXAqTSfED6poryoqDtKZM63' ];
}

//Get the user data from the window storage
export const getUser = () => {
    const user = window.localStorage.getItem('user_calificaciones');
    return JSON.parse(user);
}