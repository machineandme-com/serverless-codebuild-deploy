export async function handleHello(event: any, context: any, callback: any) {
    console.log('handleHello', event);

    callback(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "access-control-allow-headers": "*",
        },
        body: JSON.stringify({
            result: "OK"
        }),
    });
}
