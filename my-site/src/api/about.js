import request from "@/api/request";

export async function getAbout () {
    return await request.get ( "/api/about" );
}