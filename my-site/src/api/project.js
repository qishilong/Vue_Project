import request from "@/api/request";

export async function getProject () {
    return await request.get ( "/api/project" );
}