
let response;

exports.lambdaHandler = async (event, context) => {
    console.log('DOES THIS WORK!?!!!');
    console.log('DOES THIS WORK!?!!!');

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
