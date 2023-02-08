export default {
    async fetch(request: Request, env: any) {
        return new Response(request.headers.get('CF-Connecting-IP'))
    },
}