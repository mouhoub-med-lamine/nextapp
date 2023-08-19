
import { CustomButton } from "@/Components";
import Image from "next/image";

const GetData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}


export default async function Menu() {
    const data = await GetData();

    return <div className="mt-320 pt-12 ml-300">
        {data.map((user: any)=>{
            return <p>{user.name}</p>
        })}

    </div>

}

