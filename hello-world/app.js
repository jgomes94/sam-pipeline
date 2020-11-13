
let response;

exports.lambdaHandler = async (event, context) => {
    console.log('hello this me, mario!!')
    console.log('hello this me, mario!!')

    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
