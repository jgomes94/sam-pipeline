
let response;

exports.lambdaHandler = async (event, context) => {
    console.log('testing2');
    console.log('testing3');
    console.log('testing4');
    console.log('testing5');
    console.log('testing6');

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
