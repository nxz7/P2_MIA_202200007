const aws = require('aws-sdk');
require('dotenv').config();

const {
    BUCKET_USER_ID,
    BUCKET_USER_SECRET,
    BUCKET_NAME,
    BUCKET_REGION
} = process.env;

const uploadFile = async (req, res) => {
    const { path, imagen} = req.body;
    // 062620241234012340.jpg
    const buffer = new Buffer.from(path, 'base64');
    aws.config.update({
        accessKeyId: BUCKET_USER_ID,
        secretAccessKey: BUCKET_USER_SECRET,
        region: BUCKET_REGION
    });

    const s3 = new aws.S3();

    const params = {
        Bucket: BUCKET_NAME,
        Key: imagen,
        Body: buffer,
        ACL: 'public-read',
        ContentType: 'image/jpeg'
    };

    s3.putObject(params, (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500
            ).send('Error! AL SUBIR LA IMAGEN AL BUCKET');
        }
        console.log(data);
        return res.status(200).send('LA IMAGEN ESTA EN EL BUCKET');
    });
};


const uploadFile2 = async (path, imagen) => {
    // 062620241234012340.jpg
    const buffer = new Buffer.from(imagen, 'base64');
    console.log('Bucket: ', BUCKET_USER_ID)
    const s3 = new aws.S3({
        accessKeyId: BUCKET_USER_ID,
        secretAccessKey: BUCKET_USER_SECRET,
        //ContentType: 'image/jpeg/png',
        ACL: 'public-read',
    });

    const params = {
        Bucket: BUCKET_NAME,
        Key: path,
        Body: buffer,
        ContentType: 'image/jpeg'
    };

    await s3.upload(params, function sync(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log('LA IMAGEN-< PATH->: ', data.Location);  
            return data.Location;
        }});  
};


module.exports = {
    uploadFile,
    uploadFile2
};