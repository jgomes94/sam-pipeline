
let response;

exports.lambdaHandler = async (event, context) => {
    console.log('DOES THIS WORK!?!!!')
    console.log('D22222')
    console.log('D3333')
    console.log('D3333')
    console.log('D3333')

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
