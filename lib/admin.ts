import {auth} from "@clerk/nextjs"

    const adminIds = [
        "user_2dzuxZ2D7gM3ELn34vYEJL4nxTm",
    ]

export const isAdmin = () => {
    const {userId} = auth();

    if(!userId){
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
    
}